import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';
import image2 from './2.png';
import image12 from './12.png';
import image13 from './13.png';
import { Parallax } from 'react-parallax';
import group from './groupPic.png';
import backgrd from './backgrd.png';
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import forcustomers from './groupPic.png';
import HomeBanner from '../../Components/Banner/HomeBanner';

const Home = () => {
    return (
        <>
        <div>  
        <Navbar />
            <HomeBanner/>
            <div className="dha-steps">
                <h1>What    Do We Do ?</h1>
                <div class="dha-container">
                    <div class="dha-wrapper">
                        <div class="arrow-steps clearfix">
                            <div class="step current one-adva"> <span> Step 1<br />
                                Community survey<br />
                                Product Development<br />
                                Identifying suppliers<br />
                            </span> </div>
                            <div class="step two"> <span>Step 2<br />
                                Initiate production <br />
                                Establish customer base<br />
                                Modification based<br /> on market response<br />
                            </span> </div>
                            <div class="step three"> <span> Step 3 <br />
                                Growing customer base <br />
                                Establishing  <br /> market linkages</span> </div>
                            <div class="step four"> <span>Step 4<br />
                                Ensuring production<br /> efficiency
                                through <br />
                                supervision<br />
                                Branching
                                out to 
                            </span> </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-overview" id='about'>
                <div className="overview-content">
                    <h1>About Us</h1>
                    <div class="custom-typography">
                        <p class="body1">Aveksha is a pride initiative under the Enactus IGDTUW. We believe that it is our responsibility to look over all aspects of animal well-being, which includes feeding, sheltering, disease prevention and treatment, and overall care of the animals. Our process aims to provide sustainable, eco-friendly products for injured animals made by marginalized communities. This ensures threefold development: the well-being of animals, employment to the underprivileged, and promises innovation at a sustainable level.</p>
                    </div>
                </div>
                <button>Get In Touch</button>
                {/* <img src={AvekshaImg} /> */}
            </div>

            <Parallax
                // blur={{ min: -15, max: 15 }}
                bgImage={group}
                bgImageAlt="the dog"
                strength={200}
            >
                {/* Blur transition from min to max */}
                <div style={{ height: '80vh' }} />
            </Parallax>



            <div className="section-4">
                <div className="custom-typography">
                    <h2>Sustainable Development Goals</h2>
                </div>
                <ul id="categories" className="clr">
                    <li className="pusher"></li>
                    <li>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsB0WINzbQ6_2Gezc6WPwubPeRVEnHOXyMDA&usqp=CAU" alt="" />
                            <h1>Goal 3</h1>
                            <p>Good health and well-being</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={image2} alt="" />
                            <h1>Goal 2</h1>
                            <p>Zero Hunger</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={image12} alt="" />
                            <h1>Goal 12</h1>
                            <p>Responsible Consumption and Production</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={image13} alt="" />
                            <h1>Goal 13</h1>
                            <p>Climate action</p>
                        </div>
                    </li>
                </ul>
            </div>
           
            {/* <div className="section-5">
                <h1>NewsLetter For Subscription</h1>
                <div className="newsletter">
                    <div className="newsletter-content">
                        <div className="newsletter-form">
                            <input type="text" placeholder="Enter your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
        </>
    )
}

export default Home
