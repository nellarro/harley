import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h2>The Elizabeth Arkham Asylum for the Criminally Insane</h2>
          <h4>Administrative Log-In</h4>
        </div>
        <div className="log">
          <h5>Log In</h5>
          <div>
            <form>
              <div>
                <label>
                Username:
                  <input type="text" placeholder="username" />
                </label>
              </div>
              <div>
                <label>  Password:
                  <input type="text" placeholder="password" />
                </label>
              </div>
              <div className="submit">
                <label>
                  <input type="submit" value="Submit" />
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="motto">
          <footer className="landing-footer">
            <h1>Arkham Asylum:</h1>
            <h3>A Serious House on Serious Earth</h3>
          </footer>
        </div>
      </div>

    )
  }
}

export default Landing;
