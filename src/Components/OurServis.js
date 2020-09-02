import React, { Component } from 'react';
import './OurServis.css';
import smart from '../img/smartphone_copy.png';

export default class OurServis extends Component {
    constructor(props) {
        super(props);

        this.state = {
            HoverClass1: "",
            class1: " heightTab col text-center bg-white shadow p-3 mb-5",
            HoverClass2: "",
            class2: " heightTab col text-center bg-white shadow p-3 mb-5",
            HoverClass3: "",
            class3: " heightTab col text-center bg-white shadow p-3 mb-5",
            HoverClass4: "",
            class4: " heightTab col text-center bg-white shadow p-3 mb-5",
            HoverClass5: "",
            class5: " heightTab col text-center bg-white shadow p-3 mb-5",
            HoverClass6: "",
            class6: " heightTab col text-center bg-white shadow p-3 mb-5"
        };
        this.BgClass = this.BgClass.bind(this);
        this.OffClass = this.OffClass.bind(this);
    }

    BgClass(e) {
        if (e == 1) {
            this.setState(state => ({
                HoverClass1: "bgNone",
                class1: " heightTab col text-center shadow p-3 mb-5"
            }));
        } else if (e == 2) {
            this.setState(state => ({
                HoverClass2: "bgNone",
                class2: " heightTab col text-center shadow p-3 mb-5"
            }));
        } else if (e == 3) {
            this.setState(state => ({
                HoverClass3: "bgNone",
                class3: " heightTab col text-center shadow p-3 mb-5"
            }));
        } else if (e == 4) {
            this.setState(state => ({
                HoverClass4: "bgNone",
                class4: " heightTab col text-center shadow p-3 mb-5"
            }));
        } else if (e == 5) {
            this.setState(state => ({
                HoverClass5: "bgNone",
                class5: " heightTab col text-center shadow p-3 mb-5"
            }));
        } else if (e == 6) {
            this.setState(state => ({
                HoverClass6: "bgNone",
                class6: " heightTab col text-center shadow p-3 mb-5"
            }));
        }
    }



    OffClass() {
        this.setState(state => ({
            HoverClass1: "",
            class1: " heightTab col text-center bg-white shadow p-3 mb-5",
            HoverClass2: "",
            class2: " heightTab col text-center bg-white shadow p-3 mb-5",
            HoverClass3: "",
            class3: " heightTab col text-center bg-white shadow p-3 mb-5",
            HoverClass4: "",
            class4: " heightTab col text-center bg-white shadow p-3 mb-5",
            HoverClass5: "",
            class5: " heightTab col text-center bg-white shadow p-3 mb-5",
            HoverClass6: "",
            class6: " heightTab col text-center bg-white shadow p-3 mb-5"
        }));
    }

    render() {

        return (
            <div className="contentServis">
                <div className="conteiner textContent mx-lg-auto text-center">
                    <h2 className="mb-lg-4">Our Services</h2>
                    <p className='sizeTextServis'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                    </p>
                </div>
                <div>
                    <div className="conteiner widthTab mx-lg-auto">
                        <div className="row ">
                            <div onMouseOver={() => this.BgClass(1)} onMouseOut={() => this.OffClass()}
                                className={this.state.HoverClass1 + this.state.class1 + " flexBlock"}>
                                <div>
                                    <img src={smart} />
                                </div>
                                <div className="my-lg-4 widthTabServis mx-auto">
                                    <h2>Research</h2>
                                    <p>
                                        At vero eos et accusamus et iusto odio
                                        dignissimos ducimus qui blanditiis praesentium
                                        voluptatum iti atque corrupti quos.
                                    </p>
                                </div>
                                <div>
                                    <button className="btn btn-outline btnHover">
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                            <div onMouseOver={() => this.BgClass(2)} onMouseOut={() => this.OffClass()}
                                className={this.state.HoverClass2 + this.state.class2 + " flexBlock mx-4"}>
                                <div>
                                    <img src={smart} />
                                </div>
                                <div className="my-lg-4 widthTabServis mx-auto">
                                    <h2>Portfolio</h2>
                                    <p>
                                        At vero eos et accusamus et iusto odio
                                        dignissimos ducimus qui blanditiis praesentium
                                        voluptatum iti atque corrupti quos.
                                    </p>
                                </div>
                                <div>
                                    <button className="btn btn-outline btnHover">
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                            <div onMouseOver={() => this.BgClass(3)} onMouseOut={() => this.OffClass()}
                                className={this.state.HoverClass3 + this.state.class3 + " flexBlock"}>
                                <div>
                                    <img src={smart} />
                                </div>
                                <div className="my-lg-4 widthTabServis mx-auto">
                                    <h2>Support</h2>
                                    <p>
                                        At vero eos et accusamus et iusto odio
                                        dignissimos ducimus qui blanditiis praesentium
                                        voluptatum iti atque corrupti quos.
                                    </p>
                                </div>
                                <div>
                                    <button className="btn btn-outline btnHover">
                                        READ MORE
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="conteiner widthTab mx-lg-auto">
                        <div className="row ">
                            <div onMouseOver={() => this.BgClass(4)} onMouseOut={() => this.OffClass()}
                                className={this.state.HoverClass4 + this.state.class4 + " flexBlock"}>
                                <div>
                                    <img src={smart} />
                                </div>
                                <div className="my-lg-4 widthTabServis mx-auto">
                                    <h2>Documentation</h2>
                                    <p>
                                        At vero eos et accusamus et iusto odio
                                        dignissimos ducimus qui blanditiis praesentium
                                        voluptatum iti atque corrupti quos.
                                    </p>
                                </div>
                                <div>
                                    <button className="btn btn-outline btnHover">
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                            <div onMouseOver={() => this.BgClass(5)} onMouseOut={() => this.OffClass()}
                                className={this.state.HoverClass5 + this.state.class5 + " flexBlock mx-4"}>
                                <div>
                                    <img src={smart} />
                                </div>
                                <div className="my-lg-4 widthTabServis mx-auto">
                                    <h2>Development</h2>
                                    <p>
                                        At vero eos et accusamus et iusto odio
                                        dignissimos ducimus qui blanditiis praesentium
                                        voluptatum iti atque corrupti quos.
                                    </p>
                                </div>
                                <div>
                                    <button className="btn btn-outline btnHover">
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                            <div onMouseOver={() => this.BgClass(6)} onMouseOut={() => this.OffClass()}
                                className={this.state.HoverClass6 + this.state.class6 + " flexBlock"}>
                                <div>
                                    <img src={smart} />
                                </div>
                                <div className="my-lg-4 widthTabServis mx-auto">
                                    <h2>Design</h2>
                                    <p>
                                        At vero eos et accusamus et iusto odio
                                        dignissimos ducimus qui blanditiis praesentium
                                        voluptatum iti atque corrupti quos.
                                    </p>
                                </div>
                                <div>
                                    <button className="btn btn-outline btnHover">
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
