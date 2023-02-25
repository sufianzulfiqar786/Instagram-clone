import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import data from '../../LocalJSON/MessageData.json'
import data1 from '../../LocalJSON/Users.json'

import '../../CSS/MessageDetail.css'


const MessageDetail = () => {

  const { id } = useParams()
  const detailData = data.data?.find(something => something.users.includes(Number(id), 1))
  // console.log(data.data?.find(something => something.users.includes(id && 0)))

  const sender = data1 && data1.find(s => s.id == id)
  const recever = data1 && data1.find(s => s.id == 1)
  console.log(sender, recever)


  const [info1, setInfo1] = useState("");

  // const [info1, setInfo1] = useState(0);

  // function incre() {
  //    setInfo1(info1++)
  // }

  return (
    <>
      {/* {detailData.name} */}

      <div className="fluid-container messageDetailBody">

        <div className="container">
          <div className="row mx-0 border-bottom messageDetailHeaderData py-2">

            <p className='m-0 my-2 mr-2' style={{ fontSize: '20px', fontWeight: 'bold', color: 'grey' }}> <Link to={`/message/${detailData.id}`} className='messageDetailHeaderDataBack'> &#60; </Link></p>

            <img src={sender.pic} alt="" />

            <h5 className='m-0 my-2 ml-2'>{sender.name}</h5>



          </div>
        </div>

        <div className="container messageDetailContainerBody d-flex align-items-end">



          <div className=' messageDetailContainerBodyRow'>

            {detailData.messages && detailData.messages.map((el, index) => {
              // console.log(el + "helloo")
              return (


                <div className="row border-bottom ">
                  {
                    el.sender == id ?



                      <div className="col-12 mx-lg-0 mx-2">
                        <div className="row">

                          <div className="col-1 m-0 p-0  d-flex justify-content-center">
                            <span className='messageInnerImg mt-lg-2  mt-3 '><img src={sender.pic} alt="" /></span>
                          </div>

                          <div className="col-11  m-0 p-0 d-flex justify-content-start">

                            <div className="row">

                              <div className="col-12">

                                <p className="mb-0 my-3 p-0 b mx-lg-0 mx-2">  {el.text}</p>

                              </div>

                              <div className="col-12">

                              <p className='mb-3 messageDetailTimeReciver p-0 b mx-lg-0 mx-2 mr-4' >{el.time}</p>

                              </div>

                            </div>

                          </div>
                          {/* <p>sender time</p> */}

                        </div>
                      </div>


                      :

                      <div className="col-12 mx-lg-0 mx-2">
                        <div className="row">



                          <div className="col-11  m-0 p-0 d-flex justify-content-end">
                            <div className="row">

                              <div className="col-12 d-flex justify-content-end">
                                <p className="mb-0 my-3 p-0 b mx-lg-0 mx-2 mr-4">  {el.text}</p>
                              </div>

                              <div className="col-12  d-flex justify-content-end">
                                <p className='mb-3 messageDetailTimeSender  p-0 b mx-lg-0 mx-2 mr-4' >{el.time}</p>
                              </div>

                            </div>

                          </div>

                          <div className="col-1 m-0 p-0  d-flex justify-content-center">
                            <span className='messageInnerImg messageInnerImgRecever mt-lg-2  my-3 mr-lg-0 mr-4 '><img src={recever.pic} alt="" /></span>
                          </div>


                        </div>
                      </div>







                  }





                </div>

              )

            })}





            <div className="row my-3 messageDetailContainerrowBody fixed d-flex align-items-end">

              <div className="col-lg-12 ">
                <div className="row">
                  <div className="col-lg-4"></div>
                  <div className="col-lg-4">
                    <div className='mx-lg-0 mx-md-0 mx-2'>
                      <div className="row  inputFieldParent  ">
                        <div className="col-10 col-lg-10 col-md-11 inputField d-flex justify-content-center align-items-center">
                          <input type="text" className=""
                            placeholder="Enter Your Message"
                            name='srh'
                            value={info1}
                            onChange={(e) => setInfo1(e.target.value)}
                          />
                        </div>
                        <div className="col-2 col-lg-2 col-md-1">
                          <p className='mb-0' style={{ color: 'grey', fontSize: "15px", marginTop: "1px", fontWeight: "bold" }}>SEND</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4"></div>
                </div>
              </div>

            </div>

          </div>



        </div>



      </div>



    </>
  )
}

export default MessageDetail
