import React from 'react';
import styles from './body.module.css'
import LineModule from "../lineModule/LineModule.jsx";
import avatarImg from "/img/avataaars.svg"
function Home() {
    return (<div className={`${styles.body} home d-flex justify-content-center align-items-center text-white`}>
        <div className="text-center"><img
            src={avatarImg} alt=""
            className="mb-3"
            width="250px"
        />
                <div className="text-center pt-4" style={{color: "white"}}><h2
                    className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
                    <LineModule/>
                </div>
                <div>Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </div>);
}

export default Home;