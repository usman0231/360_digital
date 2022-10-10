import React from 'react'

function service(props) {
  return (
    <>
        <div className="single-service">
            <div className="single-service-img">
                    {" "}
                    <img
                    src={props.path}
                    alt=""
                    />{" "}
                </div>
                <div className="single-service-detail">
                    <h1>{props.heading}</h1>
                    <p>{props.text}</p>
            </div>
        </div>
      
    </>
  )
}

export default service