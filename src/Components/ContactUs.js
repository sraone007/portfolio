import React from 'react';
import './Styles/ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaintBrush, faMap, faPhone, faMailBulk, faDatabase } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
    return (
        
        <section className="Contact-sec">
            <div className="heading-secondary">
                <h1>Contact Us</h1>
            </div>
            <div className="row">
                
                <div className="col2">
                    <div className="contact-header"> 
                         <h3>Feel Free To <span>Contact</span></h3>
                    </div>
                    <div className= "contact-body">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <br/>
                        <br/>
                            <h4>
                                <span><FontAwesomeIcon icon ={faMap}/> </span>
                                Kamavarapukota, W.G(district), A.P
                            </h4>

                        <br/>
                            <h4>
                                <span><FontAwesomeIcon icon ={faPhone}/> </span>
                                +91-6301524765
                            </h4>
                        <br/>
                            <h4>
                                <span><FontAwesomeIcon icon ={faMailBulk}/> </span>
                                Sravanghanta27@gmail.com
                            </h4>
                        <br/>
                            <h4>
                                <span><FontAwesomeIcon icon ={faDatabase}/> </span>
                                https://www.sample.com
                            </h4>

                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="col2">
                    <div className="contact-header">
                        <h3>Leave us a <span>message</span> </h3>
                    </div>
                    <form>
                            <div className="form_group">
                                <input type="text" id="uname" 
                                className="form_input" placeholder="Enter Name" required/>
                                <label htmlFor="uname" className="form_label"> Name</label>
                            </div>

                            <div className="form_group">
                                <input type="email" id="email" 
                                className="form_input" placeholder="Enter Email Address" required/>
                                 <label htmlFor="pwd" className="form_label">Email Address</label>
                            </div>
                             
                            <div className="form_group">
                                <textarea rows="4" cols="50" id="Message" 
                                className="form_input" placeholder="What's on your mind..?" required />
                                
                                 <label htmlFor="Message" className="form_label">Message</label>
                            </div>

                            <div className="send-button">
                                <button type="submit">Send </button>
                            </div>   
                    </form>
                </div>
            </div>
        </section>
    )
}


export default ContactUs;