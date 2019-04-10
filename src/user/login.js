import React, {Component} from "react";
import styles from './style'
import {login} from '../firebaseConfig'
import {link} from 'react-router-dom'
import { Button, ButtonToolbar, Grid, Row, Col,Carousel} from 'react-bootstrap';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import swal from 'sweetalert';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }
    handleChange1(event) {
        this.setState({password: event.target.value});
    }

    async login() {
        const {email, password} = this.state;
        try {
            if(email.length && password.length){
                let res = await login({ email, password});
                
                this.setState({email : '',password : ''});
                // alert('login successfully');
                swal("Congratulations!", "You Have Successfully Login", "success");
                // this.props.history.push('/Civil');
                
                window.location.href = 'https://finalproject731-87d28.firebaseapp.com/Criminal';

            }else{
                swal("Error", "Enter Your Email and Password");
            }

        } catch(e) {
            this.setState({loader: false});
            swal( e.error)
        }
    }





    render() {
        return (
    
         
<div class="container">
  <button type="button" class="btn-success"  data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-user head2"></span>Login</button>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    

      <div class="modal-content">
        <div class="modal-header">
         
           <form class="form-horizontal">
           <h1>Login Here</h1>
                            <div class="form-group">
                                <label for="email" class="cols-sm-2 control-label"></label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
                                        <input onChange={this.handleChange} type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="cols-sm-2 control-label"></label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                                        <input onChange={this.handleChange1} type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group ">
                                <button onClick={this.login.bind(this)} type="button" class="btn btn-primary">Login</button><br/><br/>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                            </div>
                        </form>
      </div>
        
      </div>
      
    </div>
  </div>
  
</div>

                    );
    }
}

export default Login;
