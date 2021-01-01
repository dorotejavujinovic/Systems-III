import React from "react";
import { Button } from '../Button';
import { Link } from  'react-router-dom'
import Navbar from '../Navbar'
import './login.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      
      <div className="base-container" ref={this.props.containerRef}><Navbar/>
        <div class="main center">
          <div class="box center">
            <h1 className="heading">Log in</h1>
                <input type="text" name="firstname" class="input" placeholder=" Enter first name" required />
                <input type="text" name="lastname" class="input" placeholder="Enter last name" required />
                <input type="password" name="password" class="input" placeholder="Enter password" required />
                <Link to="/mainpage"  class="footer">
                  <Button buttonSize='btn--wide' buttonColor='blue' class="footer">Log in</Button>
                </Link>
          </div>
        </div>
      </div>
    );
  }
}