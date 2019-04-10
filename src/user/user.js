import React,  {Component} from "react";
import styles from './style'
import {register} from '../firebaseConfig'
import swal from 'sweetalert';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            confirmPass : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
    }


    validation(){
        const {firstName, lastName, email, password, confirmPass} = this.state;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!firstName.length){
            // alert('Enter your first name');
            swal("Error", "Enter Your First Name");
       
            return false
        }
        else if(!lastName.length){
            // alert('Enter your last name');
            swal("Error", "Enter your last name");
            return false
        }
        else if(!re.test(email.toLowerCase())){
            // alert('Enter valid email');
            swal("Error", "Enter valid email");
            return false;
        }
        else if (password.length < 8) {
            // alert('Minimum length of password field is 8 characters');
            swal("Error", "Minimum length of password field is 8 characters");
                        return false;
        } else if (password.length > 16) {
            // alert('Maximum length of password field is 16 characters');
            swal("Error", "Maximum length of password field is 16 characters");
            return false;
        }
        else if(password !== confirmPass){
            // alert('password not matched');
            swal("Error", "password not matched");
            return false
        }
        return true;

    }



  async Register(){
        const {firstName, lastName, email, password, confirmPass} = this.state;
        if(this.validation()){
            try {
                this.setState({loader: true});
                let res = await register({firstName, lastName, email, password, confirmPass});
                this.setState({firstName: '',lastName:'',email:'',password: '',confirmPass:''});
                // alert('Successfully Registered');
                swal("Congratulations!", "You Have Successfully Register", "success");
                
            } catch(e) {
                this.setState({loader: false});
                swal('Error' + e);
            }
        }
    }


    handleChange(event) {
        this.setState({firstName: event.target.value});
    }
    handleChange1(event) {
        this.setState({lastName: event.target.value});
    }
    handleChange2(event) {
        this.setState({email: event.target.value});
    }
    handleChange3(event) {
        this.setState({password: event.target.value});
    }
    handleChange4(event) {
        this.setState({confirmPass: event.target.value});
    }



    render() {
        return (
            <div class="container">
 
<button class="btn-success" data-toggle="modal" data-target="#exampleModalLong"><span class="glyphicon glyphicon-user"></span>SignUp</button>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
                   <form class="form-horizontal">
<h1>Registration</h1>
                            <div class="form-group">
                                <label for="name" class="cols-sm-2 control-label"></label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-user" aria-hidden="true"></i></span>
                                        <input onChange={this.handleChange} type="text" class="form-control" name="firstname" id="firstname"  placeholder="Enter your first name"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="username" className="cols-sm-2 control-label"></label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user" aria-hidden="true"></i></span>
                                        <input onChange={this.handleChange1} type="text" className="form-control" name="lastname" id="lastname" placeholder="Enter your last name"/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                   <label for="email" class="cols-sm-2 control-label"></label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
                                        <input onChange={this.handleChange2} type="text" class="form-control" name="email" id="email"  placeholder="Enter your email"/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="cols-sm-2 control-label"></label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                                        <input onChange={this.handleChange3} type="password" class="form-control" name="password" id="password"  placeholder="Enter your password"/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="confirm" class="cols-sm-2 control-label"></label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                                        <input onChange={this.handleChange4} type="password" class="form-control" name="confirm" id="confirm"  placeholder="Confirm your password"/>
                                    </div>
                                </div>
                            </div>

                              <div class="form-group ">
                                <button onClick={this.Register.bind(this)} type="button" class="btn btn-primary">Register</button>
                                <br/><br/>    <button type="button" class="btn btn-primary    " data-dismiss="modal">Close</button>
     
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

export default User;
