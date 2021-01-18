import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './UserProfile.css';

class UserProfile extends Component {
  render() {
    return ( 
        <div>
              <Link to="/">Home</Link>
              <br></br><br></br>
              <Link to="/credits">Credits Page</Link>
              <br></br><br></br>
              <Link to="/debits">Debits Page</Link>
          
          <h1>User Profile</h1>
 
          <div className="un">Username: {this.props.userName}</div>
          <div className="ms">Member Since: {this.props.memberSince}</div>
          <br></br><br></br>
          <div className="upImage">
          <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" width="150" height="150" alt="up"/>
          </div>
        </div>
    ); 
  }
}

export default UserProfile;