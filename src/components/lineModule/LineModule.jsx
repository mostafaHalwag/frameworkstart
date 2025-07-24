import React from 'react';
import lineModule from "./line.module.css";

function LineModule(props) {
    return (
        <div className="d-flex align-items-center justify-content-center mb-3">
            <div className={`${lineModule.line} me-3`} style={{backgroundColor:"white"}}></div>
            <i className="fa-solid fa-star"></i>
            <div className={`${lineModule.line} ms-3`} style={{backgroundColor:"white"}}></div>
        </div>
    );
}

export default LineModule;