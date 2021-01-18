import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './LogIn.css';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: { 
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }
 
  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div> 
        <Link to="/">Home</Link>
        <br></br><br></br>
        <Link to="/credits">Credits Page</Link>
        <br></br><br></br>
        <Link to="/debits">Debits Page</Link>
        <br></br><br></br>
        <h2 className="lTitle">Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">Username: </label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} placeholder="Please enter a username..."/>
          </div>
          <br></br>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Please enter a password..."/>
          </div>
          <br></br>
          <button className="logInButton">Log In</button>
        </form>
        <br></br><br></br>
        <div className="image">
        <img src="https://image.freepik.com/free-icon/login-symbol_318-9896.jpg" width="150" height="150" alt="login"/>
        </div>
      </div>
    )
  }
}

export default LogIn