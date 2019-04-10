import React, {Component} from "react";
import Header2 from "../header/header2";
import Servicec from "../header/servicec";
import ControlledCarousel from "../slider/carousel";

import Laws from "../header/laws";
import Slider from "../header/footer";
import User from "../user/user";
import Login from "../user/login";
import Team from "../user/team";
import Search from "../header/search";
import { Button, ButtonToolbar, Grid, Row, Col,Carousel} from 'react-bootstrap';

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
            
           
                <Header2/>
                   <ControlledCarousel/>
            <Servicec/>
                
                     <Laws/>  
         
                
     <Slider/>
       <Login/>
           <User/> 
                </div>
        );
    }
}

export default Service;
