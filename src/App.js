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
    }
    render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <Creator />
      </div>
    );
  }
}




export default withAuthenticator(App);
