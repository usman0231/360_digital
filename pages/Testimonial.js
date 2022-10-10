import React from 'react'

function Testimonial(props) {
  return (
    <>
        {" "}
      <img
        src={props.path}
        alt=""
        id={props.id}
        className={props.className}
      />{" "}
    </>
  )
}

export default Testimonial