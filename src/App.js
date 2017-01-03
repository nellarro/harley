import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h2>The Elizabeth Arkham Asylum for the Criminally Insane</h2>
          <h4>Administrative Log-In</h4>
        </div>
        <div className="log">
          <h5>Log In</h5>
          <form>
            <label>
              Username:
              <input type="text" placeholder="username" />
              Password:
              <input type="text" placeholder="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

    )
  }
}

export default App;
