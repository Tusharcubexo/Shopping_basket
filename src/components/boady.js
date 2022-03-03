import React from 'react'
import banner from "../assets/images/banner.jpg"

function Boady() {
    return (
        <>
            <div>
                <section classname="slider_section">
                    <div id="myCarousel" classname="carousel slide banner-main" data-ride="carousel">
                        <div classname="carousel-inner">
                            <div classname="carousel-item active">
                                <img classname="first-slide" src={banner} alt="First slide"/>
                                <div classname="container">
                                    <div classname="carousel-caption relative">
                                        <span>All New Phones </span>
                                        <h1>up to 25% Flat Sale</h1>
                                        <p>It is a long established fact that a reader will be distracted by the
                                            readable content
                                            <br/> of a page when looking at its layout. The point of using Lorem
                                            Ipsum is that</p>
                                        <a classname="buynow" href="#">Buy Now</a>
                                        <ul classname="social_icon">
                                            <li><a href="#"><i classname="fa fa-facebook-f"/></a></li>
                                            <li><a href="#"><i classname="fa fa-twitter"/></a></li>
                                            <li><a href="#"><i classname="fa fa-instagram"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <a classname="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                                <i classname="fa fa-angle-left"/>
                            </a>
                            <a classname="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                                <i classname="fa fa-angle-right"/>
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Boady;