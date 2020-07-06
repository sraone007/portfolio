import React from 'react';
import './Styles/Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faMobile, faPaintRoller, faBroadcastTower, faBell, faAddressBook, faPaintBrush, faMicrochip, faMicrophoneSlash, faAd, faPhone } from '@fortawesome/free-solid-svg-icons';

 function Service() {
    return (
        <>  
        <section className="service">
            <div className="heading-secondary">
                <h1> Our Service</h1>
            </div>
            <div className="service-text">
                <div className="row">
                    <div className="col3">
                    <span> <FontAwesomeIcon icon ={faCloud}/> </span>
                        <h2>Web Design </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. simply dummy text
                        </p>
                    </div>
                    <div className="col3">
                        <span><FontAwesomeIcon icon ={faMobile}/></span>
                        <h2> Mobile Application</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. simply dummy text
                        </p>
                    </div>
                    <div className="col3">
                        <span><FontAwesomeIcon icon ={faPaintBrush}/> </span>
                        <h2>Graphic Design</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. simply dummy text
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col3">
                        <span><FontAwesomeIcon icon ={faAd}/> </span>
                        <h2> Digital Marketing</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. simply dummy text
                        </p>
                    </div>
                    <div className="col3">
                        <span><FontAwesomeIcon icon ={faAddressBook}/></span>
                        <h2> Social Media</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. simply dummy text
                        </p>
                    </div>
                    <div className="col3">
                        <span><FontAwesomeIcon icon ={faPhone}/> </span>
                        <h2> Support 24/7</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. simply dummy text
                        </p>
                    </div>
                </div>
            </div>

        </section>
  
        </>
    )
}

export default Service;