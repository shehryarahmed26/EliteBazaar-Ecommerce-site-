import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
  return (
    <div>
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} >
                <div>
                    <img src="/Images/banner1.webp" />
                </div>
                <div>
                    <img src="/Images/banner2.webp" />
                </div>
                <div>
                    <img src="/Images/banner3.webp" />
                </div>
                <div>
                    <img src="/Images/banner4.webp" />
                </div>
                <div>
                    <img src="/Images/banner5.webp" />
                </div>
            </Carousel>
    </div>
  )
}

export default Banner