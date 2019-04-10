import React, {Component} from "react";
import { Button, ButtonToolbar, Grid, Row, Col,Carousel,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import styles from './style'
import Header from "../header/header";
import Footer from "../header/footer";
import Signin from "../header/signin";



class Admin extends Component {
    constructor(props) {    
        super(props);
        this.state = {

            email:'admin@yahoo.com',
            criminal:'criminal',
            civil:'civil',
            text:'check'
        };
        this.updateText = this.updateText.bind(this);
    }

 updateText(e) {
    this.setState({text: e.target.value})
  }
    render() {
         
        const {email,text,criminal,civil} = this.state;
        return (
            <div class="container">
            
             <div>  
             {criminal ==text && criminal ==text ?  window.location.href = 'http://localhost:3000/Criminal_admin':null}  
             {civil ==text && civil ==text ?  window.location.href = 'http://localhost:3000/civil_admin':null}  
                        
                  </div>
                   <div>
                
                       
               </div>
                <h1 style={styles.one}>Admin Pannel</h1>
               
                <div class="row main">
                    <div class="main-login main-center">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="email" class="col-lg-2 control-label" >Your Email</label>
                                <div class="col-lg-8">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
                                        <input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email" value={this.state.email} onChange={this.updateText} required/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="col-lg-2 control-label">Password</label>
                                <div class="col-lg-8">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                                        <input type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"  onChange={this.updateText} required/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label  class="col-lg-2 control-label"></label>
                                <div class="col-lg-8">
                                    <div class="input-group">
                                    <button type="button" class="btn btn-primary btn-lg btn-block login-button">Login</button>
                                  
                                        </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Admin;
