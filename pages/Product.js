import React from 'react'

function Product(props) {
  return (
    <>
        <div className="item">
        <img src={props.path} alt="" />
      </div> 
    </>
  )
}

export default Product