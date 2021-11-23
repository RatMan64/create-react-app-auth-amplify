import React, { Component } from 'react';
// const AWS = require("aws-cli")

import Creator from './Creator'
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component{
  render() {
    var ValueInP =""

    console.log(Auth.user.attributes)
    function GetRandP(){
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var passwordlen = 9
      console.log("this button was pushed" )
      var randpassword = ""
      for (var i = 0; i<=passwordlen; i++){
        var randnum = Math.floor(Math.random() * chars.length)
        randpassword += chars.substring(randnum, randnum +1)
      }
      console.log(randpassword)
    }

    return (
      <div className="App">
        <AmplifySignOut />
        <Creator />
        <input type="text"/>
        <input name="password"  type="text"/>

        <button onClick={GetRandP}>create random</button>
        <button>add password</button>
        <p>
          <button>show all saved passwords</button>
        </p>
      {/*  make component that lists all passwords in database*/}
      </div>
    );
  }
}




export default withAuthenticator(App);
