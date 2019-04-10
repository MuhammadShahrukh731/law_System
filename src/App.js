import React, { Component } from 'react';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import Routing from "./routing/router";   
import Criminal from "./laws/criminal_laws";
const db = firebase.database();
class App extends Component {

constructor(){
  super();
  this.state={
    user:{}
  }
}
componentDidMount() {

  this.authListener();
}

authListener() {
const {user} = this.state;
    if (user) {
      this.setState({ user })
      console.log("user found", user);
      localStorage.setItem('user',user.uid);

    }
    else {
      this.setState({ user:null })
      console.log("user not found", user);
      
    }
  

}
  render() {
const {user} = this.state;
    return (
      <div className="App">
        {user && <Routing/>}
         
        {!user && <Criminal/>}
{/* <Routing/> */}
      </div>
    );
  }
}

export default App;
