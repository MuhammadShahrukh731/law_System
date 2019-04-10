import React, {Component} from "react";
import Header from "../header/header";
import Laws from "../header/laws";
import Slider from "../header/footer";
import User from "../user/user";
import Login from "../user/login";
import Team from "../user/team";
import Search from "../header/search";

import ControlledCarousel from "../slider/carousel";

import { Button, ButtonToolbar, Grid, Row, Col,Carousel} from 'react-bootstrap';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
            
           
                <Header/>
                   
            
                <ControlledCarousel/>
                
                     <Laws/>  
         
                
     <Slider/>
       <Login/>
           <User/> 
                </div>
        );
    }
}

export default Home;
