import React, {Component} from "react";
import Header from "../header/header";
import Aboutc from "../header/aboutc";


import Laws from "../header/laws";
import Slider from "../header/footer";
import User from "../user/user";
import Login from "../user/login";
import Team from "../user/team";
import Search from "../header/search";
import { Button, ButtonToolbar, Grid, Row, Col,Carousel} from 'react-bootstrap';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
            
           
                <Header/>
                   
            
                
                     <Laws/>  
                     <Aboutc/> 
                
     <Slider/>
       <Login/>
           <User/> 
                </div>
        );
    }
}

export default About;
