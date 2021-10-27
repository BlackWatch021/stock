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
                                    <div class="footer-social d-flex">
                                        <ul>
                                            <li><a href="https://facebook.com/themefisher" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://twitter.com/themefisher" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                                            </li>
                                            <li><a href="https://instagram.com/themefisher" aria-label="Instagram"><i
                                                class="fab fa-instagram"></i></a></li>
                                            <li><a href="https://github.com/themefisher" aria-label="Github"><i class="fab fa-github"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                                    <p class="widget-title bold h5">Working Hours</p>
                                    <div class="working-hours description h6">
                                        We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our
                                        Hotline and Contact form.
                                        <br/><br/> Monday - Friday: <span class="text-right">10:00 - 16:00 </span>
                                            <br/> Saturday: <span class="text-right">12:00 - 15:00</span>
                                                <br/> Sunday and holidays: <span class="text-right">09:00 - 12:00</span>
                                    </div>
                                </div>

                                            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                                                <p class="widget-title bold h5">Services</p>
                                                <ul class="list-arrow description h6">
                                                    <li><a >Pre-Construction</a></li>
                                                    <li><a >General Contracting</a></li>
                                                    <li><a >Construction Management</a></li>
                                                    <li><a >Design and Build</a></li>
                                                    <li><a >Self-Perform Construction</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="copyright pt-3">
                                        <div class="container">
                                            <div class="row align-items-center">
                                                <div class="col-md-6">
                                                    <div class="copyright-info text-center text-md-left">
                                                        <span>Copyright &copy; <script>
                                                            document.write(new Date().getFullYear())
                                                        </script>, Designed &amp; Developed by </span>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="footer-menu text-right text-md-right">
                                                        <ul class="list-unstyled d-flex justify-content-around">
                                                            <li><a href="about.html">About</a></li>
                                                            <li><a href="team.html">Our people</a></li>
                                                            <li><a href="faq.html">Faq</a></li>
                                                            <li><a href="news-left-sidebar.html">Blog</a></li>
                                                            <li><a href="pricing.html">Pricing</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="back-to-top" data-spy="affix" data-offset-top="10" class="back-to-top position-fixed">
                                                <button class="btn btn-primary" title="Back to Top">
                                                    <i class="fa fa-angle-double-up"></i>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
  </footer>

            </div>
        )
    }
}
