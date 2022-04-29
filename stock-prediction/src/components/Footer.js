import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>

                <footer id="footer" class="footer pt-5">
                    <div class="footer-main">
                        <div class="container">
                            <div class="row justify-content-between">
                                <div class="col-lg-4 col-md-6 footer-widget footer-about">
                                    <p class="widget-title bold h5">About Us</p>
                                    <p className="description h6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut
                                        labore et dolore magna aliqua.</p>
                                    <div class="footer-social ">
                                        <ul className="list-unstyled d-flex  mt-4">
                                            <li><a className="" href="https://facebook.com" aria-label="Facebook"><i class="fab text-white fa-2x  fa-facebook-f"></i></a></li>
                                            <li><a className="ml-5" href="https://twitter.com" aria-label="Twitter"><i class="fab text-white fa-2x  fa-twitter"></i></a>
                                            </li>
                                            <li><a className="ml-5" href="https://instagram.com" aria-label="Instagram"><i
                                                class="fab text-white fa-2x  fa-instagram"></i></a></li>
                                            <li><a className="ml-5" href="https://github.com" aria-label="Github"><i class="fab text-white fa-2x  fa-github"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                                    <p class="widget-title bold h5">Working Hours</p>
                                    <div class="working-hours description h6">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae excepturi aliquam, labore iste consectetur ex alias optio exercitationem laboriosam.

                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                                    <p class="widget-title bold h5">Services</p>
                                    <ul class="list-arrow description h6">
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>

            </div>
        )
    }
}
