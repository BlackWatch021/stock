import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
    
export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="aboutUS">
                    <p className="text-center  ">
                        <h1 className="bold text-white">
                            CONTACT US
                        </h1>

                    </p>


                </div>
                <div className="map p-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7362.198705855526!2d75.86155442578305!3d22.687345090495263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce4e3fb47b5%3A0xc0233b393fbd54de!2sBhanwar%20Kuwa%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1635325014470!5m2!1sen!2sin" ></iframe>
                </div>

                <div className="con-form mt-4">
                    <div className="contact">
                        <h1 className="pri-clr bold text-center"> CONTACT </h1>
                    </div>

                    <div className=" d-flex col-md-12 justify-content-around ">
                        <div className="form col-md-6 p-5">
                            <div class="input-group mb-4 ">
                                <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-4">
                                <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-4">
                                <input type="text" class="form-control" placeholder="Mobile-number" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                            </div>
                            <button type="button" class="btn pri-clr text-white mt-4 col-md-12 ">Send</button>

                        </div>
                        <div className=" col-md-6 pt-5 pl-4">
                            <div className="d-flex">
                                <div className="Contact-icon p-2 "> <i class="fas  fa-phone-alt pri-clr p-2"></i> </div>
                                <div className="info ml-3">
                                    <p className="m-0">TELEPHONE</p>
                                    <p className="m-0">000-000-0000</p>
                                </div>
                            </div>
                            <div className="d-flex mt-5">
                                <div className="Contact-icon p-2 "> <i class="fas fa-envelope pri-clr p-2"></i></div>
                                <div className="info ml-3">
                                    <p className="m-0">E-MAIL</p>
                                    <p className="m-0">Stockprediction@gmail.com</p>
                                </div>
                            </div>
                            <div className="d-flex mt-5">
                                <div className="Contact-icon p-2 "> <i class="fas  fa-map pri-clr p-2"></i> </div>
                                <div className="info ml-3">
                                    <p className="m-0">Location</p>
                                    <p className="m-0">Pochinki , Squad house , House no.1 , Near School appartments Road</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

<Footer/>
            </div>
        )
    }
}
