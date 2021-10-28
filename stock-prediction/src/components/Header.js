import React, { Component } from 'react'

import { Link } from "react-router-dom";
export default class header extends Component {
    render() {
        return (
            <div >
                <div className="conatiner-fluid pt-3 d-flex fixed-top  bg-light " id="header">
                    <div className="col-md-4 mb-0 bold text-left h2 ">
                        STOCK PREDICTION
                    </div>
                    <div className="col-md-3 mb-0 text-center">
                        <div class="input-group mb-3">

                            <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <ul className="nav justify-content-end ">
                            <li className="nav-item p-2 ml-3">
                            <Link to="/#">Home</Link>
                            </li>
                            <li className="nav-item p-2 ml-3">
                            <Link to="/about">About</Link>
                            </li>
                            <li className="nav-item p-2 ml-3">
                            <Link to="/Contact">Contact</Link>
                            </li>
                            <li className="nav-item p-2 ml-3">
                             <Link to="/Signup" className="btn text-white bold">Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>



        )
    }
}
