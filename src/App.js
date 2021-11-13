import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    console.log(Auth.user.attributes.email)
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <p>this is a test</p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
