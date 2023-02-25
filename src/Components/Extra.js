import React from 'react'

import '../CSS/Extra.css'

const Extra = () => {


    const data = [
        {
            id: 1,
            comment: "Comment Today",
            pic: "/Img/NawazSharif.jpg",
            useName: "1",
            color: "pink"
        },
        {
            id: 2,
            comment: "Comment Prevoius ",
            pic: "/Img/NawazSharif.jpg",
            useName: "2",
            color: "purple"
        },
        {
            id: 3,
            comment: "Taxi From Luton",
            pic: "/Img/NawazSharif.jpg",
            useName: "3",
            color: "Orange"
        },
    ];



    return (
        <>

            <div className="fluid-conatiner">

                <div className="container border">

                    <div className="row ml-0 my-3">

                        <div className="  my-2 HaiderBhaiCommentImg">
                            <img src="/Img/NawazSharif.jpg" alt="" />
                        </div>

                        <div className="ml-3 my-3">

                            <h4 style={{ color: "blue" }}>Comments</h4>

                        </div>

                    </div>

                    <div className="row  my-3">

                        <div className="col-12">

                            <div className="row">

                                {data &&
                                    data.map((el) => {
                                        return (

                                            <div className="col-4 ">

                                                <div className='border HaiderBhaiCommentCard1st'>

                                                    <div className="row mt-2">

                                                        <div className="col-3 HaiderBhaiCommentImgCard  ">

                                                            <img className='my-3 ml-3' src="/Img/NawazSharif.jpg" alt="" />

                                                        </div>

                                                        <div className="col-9">

                                                            <div className="row px-3">

                                                                <div className="col-12 d-flex justify-content-center HaiderBhaiCommentCardCOMMENTSTODAY">

                                                                    <h5 className=''>{el.comment}</h5>

                                                                </div>

                                                                <div className="col-12 d-flex justify-content-center HaiderBhaiCommentCardCOMMENTSTODAY1">

                                                                    <h1>1</h1>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        );
                                    })}


                            </div>

                        </div>

                    </div>



                    <div className="row">

                        <div className="col-3">
                            <h3>Last Comment</h3>
                        </div>
                        <div className="col-9  ">
                            <hr className='hrWidth' />
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-8">
                            <div className="row">

                                <div className="col-1 HaiderBhaiCommentImg">
                                    <img src="/Img/NawazSharif.jpg" alt="" />
                                </div>

                                <div className="col-11">

                                    <div className="row">

                                        <div className="col-12 mb-5">

                                            <div className="row">

                                                <div className="col-11">

                                                    <p className='mb-0'>Bilal</p>

                                                </div>

                                                <div className="col-1">

                                                    <i class="fa-solid fa-bars"></i>

                                                </div>

                                            </div>

                                            <p className='mb-0'>1 minite ago</p>
                                            <div className='HaiderBhaiCommentInputDiv my-2'>

                                                <input className=' HaiderBhaiCommentInput ml-3 my-2' type="text" placeholder='Nice' />

                                            </div>

                                            <span className='mr-1'><i class="fas fa-thumbs-up"></i></span>
                                            <span>0</span>
                                            <span className='mx-1'><i class="fas fa-thumbs-down"></i></span>
                                            <span>1</span>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="col-4 border-left mb-4">



                            <div className="row">

                                <div className="col-8">
                                    <img className='commentRightVideo' src="/Img/NawazSharif.jpg" alt="" />
                                </div>

                                <div className="col-4 m-0 p-0">
                                    SampleVideo 1280*7
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </>
    )
}

export default Extra
