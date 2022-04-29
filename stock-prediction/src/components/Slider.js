import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div>
                <div className="img-slider ">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="banner-carousel-item  a-slide " >
                                <div class="slider-content carousel-item active">
                                    <div class="container h-100">
                                        <div class="row align-items-center h-100">
                                            <div class="col-md-12 text-center">
                                                <p class="slide-title text-dark animate__animated animate__fadeInLeft ">We are Stock Baba</p>
                                                <p class="slide-sub-title sec-bold h2 animate__animated animate__fadeInRight" >Stocks</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slider-content carousel-item active">
                                    <div class="container h-100">
                                        <div class="row align-items-center h-100">
                                            <div class="col-md-12 text-center">
                                                <p class="slide-title" data-animation-in="slideInLeft"></p>
                                                <p class="slide-sub-title" data-animation-in="slideInRight">Stocks</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
