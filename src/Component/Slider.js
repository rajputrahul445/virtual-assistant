import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return(
        <div className="sliderWrp">
            <Carousel autoPlay>
                <div>
                <div class="container">
                    <h1>We build <span>innovative</span><br/>tech solutions</h1>
                    <h3>At ApexSo, we specialize in developing cutting-edge technology<br/>solutions to help businesses stay ahead of the curve.</h3>
                    <ul class="listInline">
                        <li>
                            <a href="/" class="lineBtn">EXPLORE</a>
                        </li>
                        <li>
                            <a href="/" class="colorBtn">CONTACT US</a>
                        </li>
                    </ul>
                </div>
                </div>
                <div>
                    <img alt="" src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt="" src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;