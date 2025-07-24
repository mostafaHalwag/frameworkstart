import React, {useRef, useState} from 'react';
import portfolioStyles from './portfolio.module.css'






function Portfolio() {


    const overlay = useRef();
    const overlayImg = useRef();


    function displayOverlay(e, imgPath){
        overlay.current.classList.replace("d-none","d-flex")
        overlayImg.current.src = imgPath
    }

    function hideOverlay() {
        overlay.current.classList.replace("d-flex", "d-none")
    }

    return (
        <div style={{marginTop: "94px", minHeight: "calc(-114px + 100vh)"}}>
            <div>
                <div className="mb-4">
                    <div className="pt-4">
                        <div title="portfolio component" >
                            <div className="text-center pt-4" style={{color: "rgb(44, 62, 80)"}}><h2
                                className="text-uppercase mb-3 fs-1 fw-bolder">portfolio
                                component</h2>
                                <div
                                    className="d-flex align-items-center justify-content-center mb-3">
                                    <div className={`${portfolioStyles.lineModuleDark} line me-3`}
                                         style={{backgroundColor: "rgb(44, 62, 80)"}}></div>
                                    <i className="fa-solid fa-star"></i>
                                    <div className={`${portfolioStyles.lineModuleDark} line ms-3`}
                                         style={{backgroundColor: "rgb(44, 62, 80)"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative" onClick={(event)=> {
                                            displayOverlay(event, '/img/port1.png')
                                        }}>
                                        <img alt="" className="w-100 rounded-3"
                                             src='/img/port1.png'/>
                                        <div
                                            className={`${portfolioStyles.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative" onClick={(event)=> {
                                            displayOverlay(event, '/img/port2.png')
                                        }}>
                                        <img alt="" className="w-100 rounded-3"
                                             src="/img/port2.png"/>
                                        <div
                                            className={`${portfolioStyles.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative" onClick={(event)=> {
                                            displayOverlay(event, '/img/port3.png')
                                        }}>
                                        <img alt="" className="w-100 rounded-3"
                                             src="/img/port3.png"/>
                                        <div
                                            className={`${portfolioStyles.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative" onClick={(event)=> {
                                            displayOverlay(event, '/img/port1.png')
                                        }}>
                                        <img alt="" className="w-100 rounded-3"
                                             src="/img/port1.png"/>
                                        <div
                                            className={`${portfolioStyles.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative" onClick={(event)=> {
                                            displayOverlay(event, '/img/port2.png')
                                        }}>
                                        <img alt="" className="w-100 rounded-3"
                                             src="/img/port2.png"/>
                                        <div
                                            className={`${portfolioStyles.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative" onClick={(event)=> {
                                            displayOverlay(event, '/img/port3.png')
                                        }}>
                                        <img alt="" className="w-100 rounded-3"
                                             src="/img/port3.png"/>
                                        <div
                                            className={`${portfolioStyles.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={overlay}
                        className=" position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-none justify-content-center align-items-center "
                        onClick={hideOverlay}

                    >
                        <img ref={overlayImg} alt="" src="" style={{width: "600px"}}/></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;