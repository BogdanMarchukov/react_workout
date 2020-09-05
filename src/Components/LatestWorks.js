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
                <div className='textWorkContent container'>
                    <h2>{works.h2}</h2>
                    <p>{works.p}</p>
                    <div className="buttonWorkContent container">
                        <button>{works.button1}</button>
                        <button>{works.button2}</button>
                        <button>{works.button3}</button>
                        <button>{works.button4}</button>
                    </div>
                </div>
                <div classname='imgBlokWorkContent'>
                    <div className='row widthRowWorkContent mx-auto'>
                        <div className="bgImgWork">
                            <img src={img1} />
                        </div>
                        <div className='col-lg imgWorks bgImgWork'>
                            <img src={img2} />
                        </div>
                        <div className='col-lg imgWorks bgImgWork'>
                            <img src={img3} />
                        </div>
                        <div className='w-100 my-3'></div>
                        <div className='col-lg imgWorks bgImgWork'>
                            <img src={img4} />
                        </div>
                        <div className='col-lg imgWorks bgImgWork'>
                            <img src={img5} />
                        </div>
                        <div className='col-lg imgWorks bgImgWork'>
                            <img src={img6} />
                        </div>
                    </div>
                </div>
                <div className="btnWorkContent container">
                    <button>{works.button5}</button>
                </div>
            </div>
        )
    }
}
