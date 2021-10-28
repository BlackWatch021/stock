import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

export default class home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slider/>
                    <div className="hero p-5 text-center mt-4 animate__animated animate__backInLeft" >
                    <p className="h2">
                        Welcome to <span class="pri-clr bold">STOCK  PREDICTION</span>
                    </p>
                    <h4 >
                        <span class="pri-clr bold">STOCK BABA</span> is a place where you can invest in stock very easily without doing any research
                    </h4>
                    <button className="btn text-white mt-3 sec-bold">
                        get started
                    </button>

                </div>

                <section id="ts-service-area " class="ts-service-area p-5 mt-3">
                    <div class="container p-5 ">
                        <div class="row text-center">
                            <div class="col-12 ">
                                <p class=" text-white section-title bold h1">We Are Specialists In</p>
                                <p class=" text-white section-sub-title h3 bold">What We Do</p>
                            </div>
                        </div>


                        <div class="row justify-content-around mt-5">
                            <div class="col-lg-3">
                                <div class="ts-service-box rounded p-5 text-center   bg-white  ">
                                    <div class="ts-service-box-img ">
                                    <i class="fas fa-balance-scale-right pri-clr fa-3x"></i>
                                    </div>
                                    <div class="ts-service-box-info mt-4">
                                        <p class="service-box-title bold " >PREDICTION </p>
                                        <p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="ts-service-box rounded p-5 text-center   bg-white  ">
                                    <div class="ts-service-box-img ">
                                    <i class="fas fa-balance-scale-right pri-clr fa-3x"></i>
                                    </div>
                                    <div class="ts-service-box-info mt-4">
                                        <p class="service-box-title bold " >PREDICTION </p>
                                        <p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="ts-service-box rounded p-5 text-center   bg-white  ">
                                    <div class="ts-service-box-img ">
                                    <i class="fas fa-balance-scale-right pri-clr fa-3x"></i>
                                    </div>
                                    <div class="ts-service-box-info mt-4">
                                        <p class="service-box-title bold " >PREDICTION </p>
                                        <p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </section>

                <section id="customer-reviews " class="customer-reviews pb-0 mt-3">
                    <div class="container p-5 ">
                        <div class="row text-center">
                            <div class="col-12">
                                <p class="  section-title bold h2">What our customer say </p>
                                <p class="  section-sub-title bold h3">about us?</p>
                            </div>
                        </div>


                        <div class="row justify-content-around mt-5">
                            <div class="col-lg-3 ">
                                <div class="ts-service-box rounded border  bg-white  p-1">
                                    <div class="ts-service-box-img d-flex ">
                                        <div className="profile-img"></div>
                                        <div className="ml-3"> customer name</div>
                                    </div>
                                    <div class="review-box">
                                        <p class="service-box-title ">review</p>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>

                </section>
<Footer/>
            </div>
        )
    }
}
