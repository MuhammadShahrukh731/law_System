import React, {Component} from "react";
import User from "../user/user";
import Login from "../user/login";
import Header from "../header/header";
import About2 from "../laws/about2"; 
import firebaseConfig from '../firebaseConfig'; 
class Header2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        
        this.logOut=this.logOut.bind(this);
    }

    logOut(){
        firebaseConfig.auth().signOut();
        localStorage.removeItem('user');
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
                                <li><strong>03491303308</strong></li>
                                <li><a href="#">shahrukh731@yahoo.com</a></li>
                            </ul>

                        </div>
                        

                        <div className="upper-column info-box">
                            <div className="icon-box"><span className="flaticon-location"></span></div>
                            <ul>
                                <li><strong>Federal University</strong></li>
                                <li>Near Nipa Chorangi</li>
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
                                <li className="current dropdown"><a href="#">Home</a>
                                </li>
                              
                                <li><a href="http://localhost:3000/About2">About</a></li>
                               
                                <li><a href="http://localhost:3000/Service2">Service</a></li>
                            
                              
                                <li><a href="http://localhost:3000/Criminal">Criminal</a></li>
                                <li><a href="http://localhost:3000/Civil">Civil</a></li>

                                  <li><a href="http://localhost:3000/About2">Gallery</a></li>
                               
                               <li><a href="http://localhost:3000/Service2">News</a></li>
                           
                           
                               
                               <li><a href="http://localhost:3000/Service2">Carrer</a></li>
                         

                                
                                <li><a href="http://localhost:3000/"class="btn-success"><span class="glyphicon glyphicon-user"></span>LogOut</a></li>
                              
                    
                            </ul>
                        </div>
                    </nav>

                          
                </div>
                
            </div>
        </div>

       
        <div class="sticky-header">
            <div class="auto-container clearfix">
                <div class="logo pull-left">
                    <a href="index-2.html" class="img-responsive"><img src="images/logo-small.png" alt="Transpo" title="Transpo"/></a>
                </div>
                
                <div class="right-col pull-right">
                    
                    <nav class="main-menu">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            </button>
                        </div>
                        
                        <div class="navbar-collapse collapse clearfix">
                            <ul class="navigation clearfix">
                            <li className="current dropdown"><a href="#">Home</a>
                                </li>
                              
                                <li><a href="http://localhost:3000/About2">About</a></li>
                               
                                <li><a href="http://localhost:3000/Service2">Service</a></li>
                            
                                <li><a href="http://localhost:3000/Criminal">Criminal</a></li>
                                <li><a href="http://localhost:3000/Civil">Civil</a></li>

                       <li><a href="http://localhost:3000/About2">News</a></li>
                               
                                <li><a href="http://localhost:3000/Service2">Gallery</a></li>
                            
                                
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

export default Header2;
