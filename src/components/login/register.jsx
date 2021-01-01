import React from "react";
import { Button } from '../Button';
import { Link } from  'react-router-dom'
import Navbar from '../Navbar'
export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <Navbar/>
        <div class="main center">
          <div class="box center">
        <h1 className="heading">Create Account</h1>
              <input type="text" name="firstname" class="input" placeholder=" Enter first name" required />
              <input type="text" name="lastname" class="input" placeholder="Enter last name" required />
              <input type="text" name="dancegroup" class="input" placeholder="Enter dance group" required />
              <input type="text" name="role" class="input" placeholder="Enter role" required />
              <input type="password" name="password" class="input" placeholder="Create password" required />
              <input type="password" name="password" class="input" placeholder="Re-enter password" required />
              <Link to="/mainpage">
                <Button buttonSize='btn--wide' buttonColor='blue'>Register</Button>
               </Link>
        </div>
      </div>
      </div>
    );
  }
}