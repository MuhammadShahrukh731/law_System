import React, {Component} from "react";
import Header from "../header/header";
import Aboutc from "../header/aboutc";
import Servicec from "../header/servicec";


import Laws from "../header/laws";
import Slider from "../header/footer";
import User from "../user/user";
import Login from "../user/login";
import Team from "../user/team";
import Search from "../header/search";
import { Button, ButtonToolbar, Grid, Row, Col,Carousel} from 'react-bootstrap';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
            
           
                <Header/>
                           
                
                <Aboutc/>
                <Servicec/>
                  
                   
     <Slider/>
       <Login/>
           <User/> 
                </div>
        );
    }
}

export default News;
