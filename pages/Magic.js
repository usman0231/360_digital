import React from 'react'
import Image from 'next/image'

function Magic(props) {
  return (
    <>
    <div className={props.divcls}>
        {" "}
        <Image src={props.path} />
        <h5>
        <span>{props.num}</span> {props.heading}
        </h5>{" "}
        <br />
        {/*<i class="fas fa-plus"></i>*/}
        <p>
            {props.text}
        </p>
    </div>
    </>
  )
}

export default Magic