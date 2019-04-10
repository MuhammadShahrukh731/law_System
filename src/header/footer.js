import React, {Component} from "react";
 
import { Button, ButtonToolbar, Grid, Row, Col,Carousel} from 'react-bootstrap';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
   <footer class="main-footer">
        <div class="footer-upper">
            <div class="auto-container">
                <div class="row clearfix">
                
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 column">
                        <div class="footer-widget about-widget">
                            <figure><img src="images/logo-3.png" alt=""/></figure>
                            <div class="text">
                            
                                <p>Criminal and Civil law is the body of law that relates to crime. It proscribes conduct perceived as threatening, harmful, or otherwise endangering to the property, health, safety, and moral welfare of people</p>
                                <ul class="contact-info">
                               
                                {/* <li><span class="icon fa fa-map-marker"></span> 60</li>
                                <li><span class="icon fa fa-phone"></span>0349-1303308</li>
                                <li><span class="icon fa fa-envelope-o"></span> shahrukh@yahoo.com</li>
                                */}
                                <li><span></span>Federal Urdu University</li>
                                <li><span></span>0349-1303308</li>
                                <li><span></span> shahrukh@yahoo.com</li>
                               


                                    </ul>  
                            </div>
                            <div class="newsletter-form">
                                <form method="post" action="http://world5.commonsupport.com/2017/legaljustice/contact.html">
                                    <div class="form-group">
                                        <input type="email" name="useremail" value="" placeholder="Your Email" required/>
                                        <button type="submit" class="theme-btn"><span class="flaticon-send-message-button"></span></button>
                                    </div>
                                </form>
                            </div>
                            
                            
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 column">
                        <div class="footer-widget service-widget item_margin-bot-28">
                            <h2>Our Related Laws</h2>
                            <ul>
                                <li><a href="#">Civil Litigation</a></li>
                                <li><a href="#">Business Taxation</a></li>
                                <li><a href="#">Trade & Finance law</a></li>
                                <li><a href="#">Accident Injuries</a></li>
                                <li><a href="#">Family law</a></li>
                                <li><a href="#">Education Law</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 column">
                        <div class="footer-widget links-widget">
                        <h2>Help Links</h2>
                            <ul>
                                <li><a href="#">Support Forums</a></li>
                                <li><a href="#">FAQ &amp; Help Center</a></li>
                                <li><a href="#">Register an account</a></li>
                                <li><a href="#">Login with account</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Community Agent</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Customer Feedback</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 column">
                        <div class="footer-widget news-widget">
                            <h2>Latest News</h2>    
                            
                            <div class="news-post">
                                <div class="icon"></div>
                                <div class="news-content"><figure class="image-thumb"><img src="images/resource/footer-news-1.jpg" alt=""/></figure><a href="#">If you need a crown or lorem an implant you pay it gap it</a></div>
                                <div class="time">July 2, 2014</div>
                            </div>
                            
                            <div class="news-post">
                                <div class="icon"></div>
                                <div class="news-content"><figure class="image-thumb"><img src="images/resource/footer-news-2.jpg" alt=""/></figure><a href="#">If you need a crown or lorem an implant you pay it gap it</a></div>
                                <div class="time">July 2, 2014</div>
                            </div>
                            
                            <div class="news-post">
                                <div class="icon"></div>
                                <div class="news-content"><figure class="image-thumb"><img src="images/resource/footer-news-3.jpg" alt=""/></figure><a href="#">If you need a crown or lorem an implant you pay it gap it</a></div>
                                <div class="time">July 2, 2014</div>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="auto-container">
                <div class="outer-box clearfix">
                    <div class="pull-left">
                        <div class="copyright">&copy; Copyrights 2018 <a href="#" target="_blank">Law Web</a>. All rights reserved</div>
                    </div>
                    <div class="pull-right">
                        <div class="social-links">
                            <a href="#"><span class="fa fa-facebook-f"></span></a>
                            <a href="#"><span class="fa fa-twitter"></span></a>
                            <a href="#"><span class="fa fa-google-plus"></span></a>
                            <a href="#"><span class="fa fa-linkedin"></span></a>
                            <a href="#"><span class="fa fa-instagram"></span></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
 </footer>
    
              </div>
        );
    }
}

export default Footer;
