import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return(
        <div className="sliderWrp">
            <Carousel autoPlay infiniteLoop preventMovementUntilSwipeScrollTolerance={true}>
                <div className="sliderDiv">
                    <div className="sliderOverlay"></div>
                    <img src="images/pexels-hillaryfox-1595385.jpg" alt=""/>
                    <div className="container">
                        <h1>We build <span>innovative</span><br/>tech solutions</h1>
                        <h3>At Virual Assistant, we specialize in developing cutting-edge technology<br/>solutions to help businesses stay ahead of the curve.</h3>
                        <ul className="listInline">
                            <li>
                                <a href="/" className="lineBtn">EXPLORE</a>
                            </li>
                            <li>
                                <a href="/" className="colorBtn">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sliderDiv">
                    <div className="sliderOverlay"></div>
                    <img src="images/pexels-pixabay-356056.jpg" alt=""/>
                    <div className="container">
                        <h1>We build <span>innovative</span><br/>tech solutions</h1>
                        <h3>At Virual Assistant, we specialize in developing cutting-edge technology<br/>solutions to help businesses stay ahead of the curve.</h3>
                        <ul className="listInline">
                            <li>
                                <a href="/" className="lineBtn">EXPLORE</a>
                            </li>
                            <li>
                                <a href="/" className="colorBtn">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sliderDiv">
                    <div className="sliderOverlay"></div>
                    <img src="images/pexels-pixabay-270557.jpg" alt=""/>
                    <div className="container">
                        <h1>We build <span>innovative</span><br/>tech solutions</h1>
                        <h3>At Virual Assistant, we specialize in developing cutting-edge technology<br/>solutions to help businesses stay ahead of the curve.</h3>
                        <ul className="listInline">
                            <li>
                                <a href="/" className="lineBtn">EXPLORE</a>
                            </li>
                            <li>
                                <a href="/" className="colorBtn">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;