import React, { Component } from 'react';
import './Baner.css';
class Baner extends Component {
    render() {
        return (
            <div className="banerImag">
                <div className="row justify-content-center">
                    <div className= "col-xl-7 align-items-center text-center colorText">
                        <h1>Web development project</h1>
                        <h3 className= "italicsText">Very suitable to support all web development projects</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 container centerButton">
                        <button className="btn btn-outline btnHover btn-lg colorText thicknessText">
                            HIRE IS NOW
                        </button>
                        <button className="btn btn-outline btnHover btn-lg colorText mgButton thicknessText">
                            OUR SERVICES
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Baner;
