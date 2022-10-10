import React from 'react'
import Image from 'next/image'

function Portfolio(props) {
  return (
    <>
            <div className="mlr--15 content">
               
                <a
                data-fancybox="images"
                href={props.path}
                className="portfolio-img"
                >
                
                <Image src={props.path} alt="" />

                <div className="content-details fadeIn-top">
                    
                    <i className="fa fa-search" aria-hidden="true" />
                </div>
                </a>
            </div>
    </>
  )
}

export default Portfolio