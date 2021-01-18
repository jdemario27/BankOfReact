import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './Home.css';
    
    class Home extends Component {
      render() {
        return (
            <div className="home"> 
              <h1 className="title">Bank of React</h1>
              <div className="links">
              <Link to="/userProfile">User Profile</Link>
              <br></br><br></br>
              <Link to="/login">Log In Here</Link>
              <br></br><br></br>
              <Link to="/credits">Credits Page</Link>
              <br></br><br></br>
              <Link to="/debits">Debits Page</Link>
              <br></br><br></br> 
              <AccountBalance accountBalance={this.props.accountBalance}/>
              <br></br><br></br>
              <img src="https://www.financialsuccess.iastate.edu/blog/wp-content/uploads/2020/09/bank-getty.jpg" width="400" height="400" alt="bank"/>
              </div>
            </div>
        );
      }
    }
    
    export default Home;