import React, {Component} from "react";
import User from "../user/user";
import Login from "../user/login";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
               <div className="page-wrapper">

    <header className="main-header">
        
        <div className="header-upper">
            <div className="auto-container">
                <div className="clearfix">
                    
                        <div className="pull-left logo-outer">

                        <div className="logo"><a href="index-2.html"><img src="images/logo.png" alt="Transpo" title="Transpo"/></a></div>

                    </div>
                    

                    <div className="pull-right upper-right clearfix">
                        
                        <div className="upper-column info-box">
                            <div className="icon-box"><span className="flaticon-phone-call"></span></div>
                            <ul>
                                <li><strong>0349-1303308</strong></li>
                                <li><a href="#">shahrukh@yahoo.com</a></li>
                            </ul>

                        </div>
                        

                        <div className="upper-column info-box">
                            <div className="icon-box"><span className="flaticon-location"></span></div>
                            <ul>
                                <li><strong>Federal University</strong></li>
                                <li>Near Nipa</li>
                            </ul>
                        </div>
                        
                        <div className="upper-column info-box">
                        
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className="header-lower">
            
            <div className="bg-layer"></div>
            
            
            <div className="auto-container">
                <div className="nav-outer clearfix">
                    <nav className="main-menu">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse clearfix">
                            <ul className="navigation clearfix">
                               
                                    <li className="current dropdown"><a href="http://localhost:3000/">Home</a></li>
                              
                              <li><a href="http://localhost:3000/About">About Us</a></li>
                              <li><a href="http://localhost:3000/Service">Service</a></li>
                              <li><a href="http://localhost:3000/News">News</a></li>
                              <li><a href="http://localhost:3000/Service">Gallery</a></li>
                               
                            
                            

<li><a class="btn-success" data-toggle="modal" data-target="#exampleModalLong"><span class="glyphicon glyphicon-user"></span>SignUp</a></li>
<li><a class="btn-success"  data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-user "></span>Login</a></li>
<li><a href="http://localhost:3000/Service">Team</a></li>
<li><a href="http://localhost:3000/News">Research</a></li>
                                
                    
                            </ul>
                        </div>
                    </nav>
                    {/* <div class="btn-outer"><a href="contact.html" class="theme-btn quote-btn">REQUEST A QUOTE</a></div>
             */}
                </div>
                
            </div>
        </div>

       
        <div class="sticky-header">
            <div class="auto-container clearfix">
                <div class="logo pull-left">
                    <a href="index-2.html" class="img-responsive"><img src="images/logo-small.png" alt="Transpo" title="Transpo"/></a>
                </div>
                
                <div class="right-col pull-right">
                    
                <nav className="main-menu">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse clearfix">
                            <ul className="navigation clearfix">
                                <li className="current dropdown"><a href="http://localhost:3000/">Home  </a></li>
                              
                                <li><a href="http://localhost:3000/About">About Us</a></li>
                                <li><a href="http://localhost:3000/Service">Service</a></li>
                                <li><a href="http://localhost:3000/News">News</a></li>
                                <li><a href="http://localhost:3000/Service">Gallery</a></li>
                                <li><a href="http://localhost:3000/News">Research</a></li>
                                <li><a href="http://localhost:3000/Service">Team</a></li>
                                <li><a href="http://localhost:3000/News">Career</a></li>
                                
                              
                           

<li><a class="btn-success" data-toggle="modal" data-target="#exampleModalLong"><span class="glyphicon glyphicon-user"></span>SignUp</a></li>
<li><a class="btn-success"  data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-user "></span>Login</a></li>

                    
                            </ul>
                        </div>
                    </nav>
                    
                </div>
                
            </div>
        </div>
    </header>

    
                 
            </div>
        );
    }
}

export default Header;
