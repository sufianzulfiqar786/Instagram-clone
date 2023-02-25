import React from 'react'
import { Link, useParams } from 'react-router-dom'

import data from '../LocalJSON/Users.json'

import '../CSS/UserDetail.css'

const UserDetail = () => {


    const { id } = useParams()
    const detailData = data && data.find(something => something.id == id)
    console.log(id)
    return (
        <>
            {/* {id} 
            <p>{detailData.name}</p>  */}

            <div className="fluid-container ">


                <div className="container UserDetailContainer border">

                    <div className="row border-bottom " style={{ marginBottom: '14px' }}>

                        <div className="col-lg-12 d-flex justify-content-center   ">
                            <h5 className='m-0 my-2'>{detailData.name}</h5>
                        </div>
                    </div>

                    <div className="row my-2">

                        <div className="col-lg-3 detailDataProfilePic ">
                            <img className='mb-2' src={detailData.pic} alt="" />
                            <p className='m-0' style={{ fontWeight: 'bold' }}>{detailData.name}</p>
                            <p className='m-0 userDetailParagraph'>{detailData.profession}</p>
                        </div>
                        <div className="col-lg-9">

                            <div className="row">

                                <div className="col-lg-6"></div>
                                <div className="col-lg-6">
                                    <div className="row mt-4">
                                        <div className="col-4 d-flex justify-content-center">
                                            <p className='m-0 userDetailParagraph' >{detailData.posts.length}</p>
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <p className='m-0 userDetailParagraph' > 7.8 M </p>
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <p className='m-0 userDetailParagraph' >1</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-4 d-flex justify-content-center">
                                            <p className='userDetailParagraph'>Posts</p>
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <p className='userDetailParagraph'> Followers </p>
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <p className='userDetailParagraph'>Followings</p>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                    <div className="row ">

                        <div className="col-lg-12 ">
                            <p className='text-justify userDetailParagraph '>{detailData.des}</p>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-lg-12 d-flex justify-content-center">

                            <Link to={`/message/${id}`}>    <button className='msgBtn  mb-3' >     Message </button>
                            </Link >
                        </div>

                    </div>

{/* <div className='mx-md-2 mx-3'> */}
<div className=''>

                    <div className="row ">
                        {detailData.posts &&
                            detailData.posts.map((k) => {

                                return (
                                    
                                        <div className="col-4 m-0 p-0 postImgInProfile">
                                            {<img src={k.picc} className='' alt="" />}
                                        </div>
                                  
                                );
                            })}

                    </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default UserDetail
