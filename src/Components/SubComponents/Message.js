import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import data from '../../LocalJSON/Users.json'

import data1 from '../../LocalJSON/MessageData.json'


import '../../CSS/Message.css'




const Message = () => {


    const { id } = useParams()
    const detailData = data && data.find(something => something.id == id)
    // console.log(detailData.name)

    const sender = data && data.find(s => s.id == id)
    const reciver = data && data.find(s => s.id == 1)

// console.log(data1.data[0].messages[data1.data[0].messages.length -1])

const sender1 = data1.data[0].messages[data1.data[0].messages.length -1]


    

    const [info1, setInfo1] = useState("");
    const [fDta, setfDta] = useState();

    useEffect(() => {
        setfDta(data)
        if (info1) {
            const filter = data.filter(n => ((n.name).toLowerCase()).includes((info1).toLowerCase()))
            console.log(filter)
            setfDta(filter)
        }

    }, [info1])

    return (
        <div className="fluid-container">

            <div className="container">

                <div className="row border-bottom">

                    <div className="col-1">
                        <p className='m-0 my-2' style={{ fontSize: '20px', fontWeight: 'bold', color: 'grey' }}> <Link to={`/userdetail/${detailData.id}`}> <span style={{color: 'grey'}}>&#60;</span> </Link></p>
                    </div>
                    <div className="col-11 messageHeaderName d-flex justify-content-center">

                        <h5 className='m-0 my-2 '>{detailData.name}</h5>

                    </div>

                </div>

                <div className="row my-3">

                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4">
                                <div className='mx-lg-0 mx-md-0 mx-2'>
                                    <div className="row  inputFieldParent  ">
                                        <div className="col-10 col-lg-10 col-md-11 inputField d-flex justify-content-center align-items-center">
                                            <input type="text" className=""
                                                placeholder="Search Videos"
                                                name='srh'
                                                value={info1}
                                                onChange={(e) => setInfo1(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-2 col-lg-2 col-md-1">
                                            <i class="fa fa-search ml-4" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4"></div>
                        </div>
                    </div>

                </div>



                {fDta?.length > 0 ? fDta.map((el,i) => {
                    return (

                        <div className="row mb-2 py-2 mx-1 messageRow">

                          

                            <div className="col-lg-1 col-md-1 col-2  messageImg m-0 p-0">
                                <Link to={`/messagedetail/${el.id}`}>    <img className='ml-2' src={el.pic} alt="" /> </Link>
                            </div>

                            <div className="col-lg-11 col-md-11 col-10 d-flex align-items-center">
                                <div className="row ">
                                    <div className="col-lg-12">
                                    <Link className='messageName' to={`/messagedetail/${el.id}`}>       <p className='m-0 pl-lg-0 pl-md-3 pl-2 ' style={{ fontWeight: 'bold', color:"black" }}>{el.name}</p>  </Link>
                                    </div>
                                    <div className="col-lg-12">
                                        {/* <p className='m-0  pl-lg-0 pl-md-3 pl-2'>{el.message[0].msg}</p> */}
                                        {/* <p className='m-0  pl-lg-0 pl-md-3 pl-2'>{sender1.text}</p> */}
                                        <p className='m-0  pl-lg-0 pl-md-3 pl-2'>{data1.data[i].messages[data1.data[i].messages.length -1].text}</p>
                                        <p className='m-0  pl-lg-0 pl-md-3 pl-2'  style={{fontSize:'12.5px', color:'grey'}}>{data1.data[i].messages[data1.data[i].messages.length -1].time}</p>

{console.log(data1.data[i].messages[data1.data[i].messages.length -1])}

{/* {console.log(sender1.text)} */}

                                    </div>
                                </div>
                            </div>

                            

                        </div>

                    )
                }) : 
                
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                    <p style={{color:"grey"}}>Hi..<span style={{fontWeight:'bold'}}>{reciver.name}</span> your data  is <span style={{fontWeight:'bold'}}>not found</span></p>
                    </div>
                </div>
                
                }



            </div>

        </div>
    )
}

export default Message
