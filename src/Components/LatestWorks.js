import React, { Component } from 'react';
import './LatestWorks.css';
import img1 from '../img/watch_img.png';
import img2 from '../img/Layer2.png';
import img3 from '../img/Layer3.png';
import img4 from '../img/Layer4.png';
import img5 from '../img/Layer5.png';
import img6 from '../img/Layer6.png';

export default class LatestWorks extends Component {
    render() {

        let works = this.props.works;

        return (
            <div className="latestWorkContent">
                <div className='textWorkContent'>
                    <h2>{works.h2}</h2>
                    <p>{works.p}</p>
                    <div className="buttonWorkContent">
                        <button>{works.button1}</button>
                        <button>{works.button2}</button>
                        <button>{works.button3}</button>
                        <button>{works.button4}</button>
                    </div>
                </div>
                <div classname='imgBlokWorkContent'>
                    <div className='row'>
                        <div className='col'>
                            <img src={img1}></img>
                        </div>
                        <div className='col'>
                            <img src={img2}></img>
                        </div>
                        <div className='col'>
                            <img src={img3}></img>
                        </div>
                        <div className='w-100 my-4'></div>
                        <div className='col'>
                            <img src={img4}></img>
                        </div>
                        <div className='col'>
                            <img src={img5}></img>
                        </div>
                        <div className='col'>
                            <img src={img6}></img>
                        </div>
                    </div>
                </div>
                <div className="btnWorkContent">
                    <button>{works.button5}</button>
                </div>
            </div>
        )
    }
}
