import React, {Component, useEffect} from 'react';
// const AWS = require("aws-cli")

import Creator from './Creator'
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
import Amplify, {API} from 'aws-amplify';
import aws_exports from './aws-exports';
import Myswitch from "./controlledswitch";
Amplify.configure(aws_exports);




class App extends Component{



    constructor() {
        super();

        this.usenum = React.createRef()
        this.GetRandP = this.GetRandP.bind(this)


    }






    GetRandP=()=>{

        const nums = "0123456789"
        const lower ="abcdefghijklmnopqrstuvwxyz"
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const symbols = "!@$%^&*()<>,.?/[]{}-=_+"

        console.log(this.usenum.current.firstChild.firstChild.value)
        var chars = nums + lower + upper + symbols
        var passwordlen = 9
        console.log("this button was pushed" )
        var randpassword = ""
        for (var i = 0; i<=passwordlen; i++){
            var randnum = Math.floor(Math.random() * chars.length)
            randpassword += chars.substring(randnum, randnum +1)
        }
        console.log(randpassword)
    }




    render() {


        // console.log(Auth.user.attributes)


    return (
      <div className="App">
        <AmplifySignOut />
        <Creator />
        <input type="text"/>
        <input name="password"  type="text"/>

        <button onClick={this.ApiTest}>create random</button>
        <button >add password</button>
          <Myswitch ref={this.usenum}/>
        <p>
          <button>show all saved passwords</button>
        </p>
      {/*  make component that lists all passwords in database*/}
      </div>
    );
  }
}




export default withAuthenticator(App);
