import React, { Component } from 'react';
import logo from './logo.svg';
import Creator from './Creator'
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {

    console.log(Auth.user.attributes)
    return (
      <div className="App">
        <AmplifySignOut />
        <Creator />
        <input type="text"/>
        <input type="text"/>
        <button>create random</button>
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
