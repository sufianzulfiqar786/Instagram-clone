import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import '../CSS/Home.css'

import data from '../LocalJSON/Users.json'

import commentData from '../LocalJSON/commet.json'



const Home = () => {


    const [heart, setHeart] = useState(
        1
    );
    const [comment, setComment] = useState({

    });
    console.log(comment)


    const { id } = useParams()
    const detailData = data && data.find(something => something.id == id)

    return (
        <>

            <div className="fluid-container">

                <div className="container ">

                    <div className='mx-2'>


                        <div className="row border">

                            <div className="col-11">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png" alt="" width={200} height={70} />
                            </div>

                            <div className="col-1 d-flex justify-content-end ">
                            <Link to={`/message/1`}>        <i class="fab fa-facebook-messenger py-4" style={{ fontSize: "25px", color:"black" }}></i>
                            </Link >
                            </div>

                        </div>

                        {data &&
                            data.map((el, i) => {
                                let filter = commentData.find(c => c.post_id == el.id)

                                return (

                                    <div className="row border my-3 postStyle">


                                        <div className="col-lg-12">


                                        <div className="row mt-2">
                                                        <div className="  profileLogo  d-flex align-items-center">
                                                        <Link to={`userdetail/${el.id}`}>
                                                        <img src={el.pic} alt="" />
                                                    </Link>
                                                        </div>

                                                        <div className='profileTextHeader ' >
                                                            <div className="row ">

                                                                <div className="col-12 ">
                                                                <Link className='homeName' to={`userdetail/${el.id}`}> <span style={{ fontWeight: 'bold' }} className='m-0'>{el.name} </span>  </Link>

                                                                </div>
                                                                <div className="col-12 ">
                                                                <Link className='homeName' to={`userdetail/${el.id}`}>   <span className='m-0'>{el.namee} </span>  </Link>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>

                                            <div className="row profileImg">
                                                {el.posts && <img src={el.posts[0]?.picc} className='my-2' alt="" />}



                                            </div>

                                            <div className="row">

                                                <div className="col-lg-6">
                                                    <div className="row">

                                                        <div className="col-1" onClick={() => setHeart({ ...heart, [i]: !heart[i] })}>
                                                            {!heart[i] ? <i class="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart" style={{ color: "red" }} ></i>}

                                                        </div>

                                                        <div className="col-11">
                                                            <i class="fa-solid fa-message"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">

                                                </div>

                                                <div className="col-lg-1">

                                                </div>

                                                <div className="col-lg-11">
                                                </div>

                                            </div>

                                            <div className="row mx-0 mb-2 p-0">

                                                <div className="col-lg-12 m-0 p-0">

                                                  { 

                                                  !comment[i]? 
                                                  
                                                  <div className="mt-2 d-flex">
                                                        <div className="    d-flex align-items-center">
                                                            <img className='commentImg' src={commentData[i]?.comments[0]?.pic} alt="" />
                                                        </div>

                                                        <div className='commentTextDiv' >
                                                            
                                                                <div className="commentTextName">
                                                                    <p className='mb-0' >{commentData[i]?.comments[0]?.user_name}</p>
                                                                </div>
                                                               
                                                                    <p className='mb-0 mt-0'>{commentData[i]?.comments[0]?.msg}</p>
                                                        
                                                        </div>

                                                    </div>
                                                    :
                                                    ''
}
                                                    {
                                                        
                                                     !comment[i]?    <p className='mt-2 mb-2' onClick={() => setComment({ ...comment, [i]: !comment[i] })} >see comments</p>
                                                    :
                                                    <p className='mt-2 mb-2' onClick={() => setComment({ ...comment, [i]: !comment[i] })} style={{color:'grey'}} >less comments</p>
                                                    
                                                    }



                                                    {!comment[i] ?
                                                        <p></p>
                                                        :

                                                        filter?.comments && filter.comments?.map(g => {

                                                            return (
                                                                <div className="mt-2 d-flex">
                                                                <div className="    d-flex align-items-center">
                                                                    <img className='commentImg' src={g.pic} alt="" />
                                                                </div>
        
                                                                <div className='commentTextDiv' >
                                                                    
                                                                        <div className="commentTextName">
                                                                            <p className='mb-0' >{g.user_name}</p>
                                                                        </div>
                                                                       
                                                                            <p className='mb-0 mt-0'>{g.msg}</p>
                                                                
                                                                </div>
        
                                                            </div>
                                                            )
                                                        })



                                                    }
                                                </div>

                                            </div>



                                        </div>


                                    </div>


                                );
                            })}

                    </div>



                </div>

            </div>

        </>
    )
}

export default Home