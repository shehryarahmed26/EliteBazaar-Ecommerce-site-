import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
  return (
    <div>
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} >
                <div>
                    <img src="/Images/banner-1.jpg" />
                </div>
                <div>
                    <img src="/Images/banner-2.jpg" />
                </div>
                <div>
                    <img src="/Images/banner-3.jpg" />
                </div>
                <div>
                    <img src="/Images/banner-4.webp" />
                </div>
                <div>
                    <img src="/Images/banner-5.webp" />
                </div>
            </Carousel>
    </div>
  )
}

export default Banner