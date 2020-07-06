import React from 'react';
import Profile from './Profile';
import Service from './Service';
import Footer from './Footer';
import './Styles/NavigationBar.css';
import './Styles/Animations.css';
import font from './Fontawesome/font';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ContactUs from './ContactUs';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 function NavigationBar() {
     
    return (
        <>
            
        <nav className="navbar">
            <div className="logo">Logo</div>

            <a  href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
            </div>
        </nav>

        <header className="header">
            <div className="header-box">
                <h2 className="header-title">Welcome To <span>Slider</span> page</h2> <br />
                <p>ipsum Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry.
                </p>
                <br /> <br />
                <button href="#" className="button">Learn More</button>
            </div>
        </header>

    {/* Profile Section

        <Profile /> */}

    {/* Service Section*/}

    
        <Service />
    
      

    {/* our Work
        <section className="main">
            <div className="heading-secondary">
                <h1>Section 1</h1>
            </div>
            <div className="row">
                <div className="col col-1">
                    <h1>container 1</h1><br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially 
                        unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem
                         Ipsum.
                    </p>
                </div>
                <div className="col col-2">
                    <h1>container 2</h1><br />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="col col-3">
                    <h1>container 3</h1><br />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </section>

        */}

        <section >
            <div className="scroll-box">
                <div className="container">
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </h3>
                    <br/>
                    <p>- web developer</p>
                </div>
            </div>
        </section>
       {/* <Router>
            <Switch>
                <Route path="./ContactUs" component={ContactUs} />
                <Route path="./Footer" component={Footer} />
            </Switch>
            </Router>
        */}
        <ContactUs />
        <Footer />
        </>
    )
}

export default NavigationBar;