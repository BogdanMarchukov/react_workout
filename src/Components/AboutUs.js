import React, { Component } from 'react';
import './AboutUs.css';
import internet from '../img/internet.png';
import transfer from '../img/transfer.png';
import head from '../img/head.png';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="contentAbout d-flex justify-content-center flex-column">
                    <div className="container widthContent">
                        <h2 className="text-center sizeText"><strong>About Us</strong></h2>
                        <p className="text-center sizeP">
                            <small>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </small>
                        </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="container flexItems">
                                    <img className="sizeImg_1" src={internet}/>
                                    <h2 className="text-center mt-lg-3 mb-lg-0 fontSize">Awesome Icons</h2>
                                    <h3 className="text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="container flexItems">
                                    <img className="sizeImg_2" src={transfer}/>
                                    <h2 className="text-center mt-lg-3 mb-lg-0 fontSize">One Page</h2>
                                    <h3 className="text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor
                                        </h3>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="container flexItems">
                                    <img className="sizeImg_3" src={head}/>
                                    <h2 className="text-center mt-lg-3 mb-lg-0 fontSize">Fully Responsive</h2>
                                    <h3 className="text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
