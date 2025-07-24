import React from 'react';
import contactStyles from "../contact/contact.module.css";






function Contact() {

    return (
        <div style={{marginTop: "94px", minHeight: "calc(-114px + 100vh)"}}>
            <div className="mb-4">
                <div className="pt-3 conatiner">
                    <div className="text-center pt-4"><h2 className="text-uppercase mb-3 fs-1 fw-bolder">CONTACT
                        SECTION</h2>
                        <div
                            className="d-flex align-items-center justify-content-center mb-3">
                            <div className={`${contactStyles.lineModuleDark} line me-3`}
                                 style={{backgroundColor: "rgb(44, 62, 80)"}}></div>
                            <i className="fa-solid fa-star"></i>
                            <div className={`${contactStyles.lineModuleDark} line ms-3`}
                                 style={{backgroundColor: "rgb(44, 62, 80)"}}></div>
                        </div>
                        <form noValidate="" action=""
                              className="w-50 p-3 mx-auto mt-5"><label
                            htmlFor="userName" className="position-relative top-0 __top">
                        </label><input id="userName" type="text" placeholder="userName"
                                             name="userName"
                                             className={`${contactStyles.form} form-control border-0 border-bottom py-3 position-relative`}/><label
                            htmlFor="userAge" className="position-relative top-0 __top">
                        </label><input id="userAge" type="text" placeholder="userAge"
                                             name="userAge"
                                             className={`${contactStyles.form} form-control border-0 border-bottom py-3 position-relative`}/><label
                            htmlFor="userEmail" className="position-relative top-0 __top">
                        </label><input id="userEmail" type="text" placeholder="userEmail"
                                             name="userEmail"
                                             className={`${contactStyles.form} form-control border-0 border-bottom py-3 position-relative`}/><label
                            htmlFor="userPassword" className="position-relative top-0 __top">
                        </label><input id="userPassword" type="text"
                                             placeholder="userPassword" name="userPassword"
                                             className={`${contactStyles.form} form-control border-0 border-bottom py-3 position-relative`}/>
                            <button className="btn mt-4 text-white"
                                    style={{backgroundColor: "#1abc9c"}}> send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;