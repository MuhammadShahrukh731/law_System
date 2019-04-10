import React, {Component} from "react";
import {ButtonToolbar, Grid, Row, Col,Carousel, Image,Caption} from 'react-bootstrap';
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default class ControlledCarousel extends React.Component {
    constructor(props) {
        super(props);


        this.state = {

        };
    }



    render() {

        return (
           <div>
               <div style={{margin:20}}>
                   <div id="myCarousel" class="carousel slide" data-ride="carousel">

                       <ol class="carousel-indicators">
                           <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                           <li data-target="#myCarousel" data-slide-to="1"></li>
                           <li data-target="#myCarousel" data-slide-to="2"></li>
                       </ol>

                       <div class="carousel-inner">
                           <div class="item active">
                               <img src={require('./../images/five.jpg')} alt="Los Angeles" style={{width:'100%',height:400}}/>
                           </div>

                           <div class="item">
                               <img src={require('./../images/four.jpg')} alt="Chicago" style={{width:'100%',height:400}}/>
                           </div>

                           <div class="item">
                               <img src={require('./../images/three.jpg')} alt="New york" style={{width:'100%',height:400}}/>
                           </div>
                       </div>

                       <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                           <span class="glyphicon glyphicon-chevron-left"></span>
                           <span class="sr-only">Previous</span>
                       </a>
                       <a class="right carousel-control" href="#myCarousel" data-slide="next">
                           <span class="glyphicon glyphicon-chevron-right"></span>
                           <span class="sr-only">Next</span>
                       </a>
                   </div>
               </div>
           </div>

    );

    }
}
