import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'



export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="aboutUS">
                    <p className="text-center  ">
                        <h1 className="bold text-white">
                            ABOUT US
                        </h1>

                    </p>
                </div>

                <div className="Goal-sec d-flex col-md-12 mt-5  justify-content-around">
                    <div className="content col-md-5  p-5">
                        <h2 className="pri-clr bold">
                            OUR GOAL
                        </h2>
                        <p>
                            Tens of millions of people look for design inspiration and feedback on Dribbble. We help players like you share small screenshots (shots) to show off your current projects, boost your portfolio, and love what you do—no matter what kind of creative professional you are.
                        </p>
                        <p>
                            Founded in 2009, we are a bootstrapped and profitable company helping design talent share, grow, and get hired by over 40,000 of today’s most innovative brands around the world.Founded in 2009, we are a bootstrapped and profitable company helping design talent share, grow, and get hired by over 40,000 of today’s most innovative brands around the world.
                        </p>
                    </div>
                    <div className="img-sec  col-md-5">
                        <div className="d-flex">
                            <div className="img pb-2 pl-2">
                                <img src="https://images.unsplash.com/photo-1635189540436-4cdcae9c740f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
                            </div>
                            <div className="img pb-2 pl-2">
                                <img src="https://images.unsplash.com/photo-1635189540436-4cdcae9c740f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />

                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="img pb-2 pl-2">
                                <img src="https://images.unsplash.com/photo-1635189540436-4cdcae9c740f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />

                            </div>
                            <div className="img pb-2 pl-2">
                                <img src="https://images.unsplash.com/photo-1635189540436-4cdcae9c740f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />

                            </div>
                        </div>

                    </div>


                </div>



                <div className="team-container mt-5 ">
                    <h1 className="text-center bold text-whit">OUR TEAM</h1>

                    <div className="d-flex justify-content-around">

                        <div class="card col-md-3 p-0">
                            <img src="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="John" />
                            <h1>John Doe</h1>
                            <p class="title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div className="socials">
                            <a href="#"><i class=" p-3 fa fa-dribbble"></i></a>
                            <a href="#"><i class=" p-3 fa fa-twitter"></i></a>
                            <a href="#"><i class=" p-3 fa fa-linkedin"></i></a>
                            <a href="#"><i class=" p-3 fa fa-facebook"></i></a></div>
                            <p><button className="pri-clr text-white bold">Contact</button></p>
                        </div>
                        <div class="card col-md-3 p-0">
                            <img src="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="John" />
                            <h1>John Doe</h1>
                            <p class="title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div className="socials">
                            <a href="#"><i class=" p-3 fa fa-dribbble"></i></a>
                            <a href="#"><i class=" p-3 fa fa-twitter"></i></a>
                            <a href="#"><i class=" p-3 fa fa-linkedin"></i></a>
                            <a href="#"><i class=" p-3 fa fa-facebook"></i></a></div>
                            <p><button>Contact</button></p>
                        </div>
                        <div class="card col-md-3 p-0">
                            <img src="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="John" />
                            <h1>John Doe</h1>
                            <p class="title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div className="socials">
                            <a href="#"><i class=" p-3 fa fa-dribbble"></i></a>
                            <a href="#"><i class=" p-3 fa fa-twitter"></i></a>
                            <a href="#"><i class=" p-3 fa fa-linkedin"></i></a>
                            <a href="#"><i class=" p-3 fa fa-facebook"></i></a></div>
                            <p><button>Contact</button></p>
                        </div>
                        <div class="card col-md-3 p-0">
                            <img src="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="John" />
                            <h1>John Doe</h1>
                            <p class="title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div className="socials">
                            <a href="#"><i class=" p-3 fa fa-dribbble"></i></a>
                            <a href="#"><i class=" p-3 fa fa-twitter"></i></a>
                            <a href="#"><i class=" p-3 fa fa-linkedin"></i></a>
                            <a href="#"><i class=" p-3 fa fa-facebook"></i></a></div>
                            <p><button>Contact</button></p>
                        </div>
                       
                    </div>


                </div>
                <Footer />
            </div>
        )
    }
}
