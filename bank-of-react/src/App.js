import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component { 

  constructor() {
    super();
    this.state = { 
      accountBalance: 14568.27,
      debitInfo: [],
      debitAmount: 0,
      creditInfo: [], 
      creditAmount: 0,  
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
    this.updateCredit = this.updateCredit.bind(this)
    this.updateDebit = this.updateDebit.bind(this)
    this.updateDebitInfo = this.updateDebitInfo.bind(this)
    this.updateCreditInfo = this.updateCreditInfo.bind(this)
  }

  componentDidMount = () => {
    axios.get("https://moj-api.herokuapp.com/debits")
      .then((response) => {
        const data = response.data;

        let temp = [];

        for(let i =0; i< data.length; i++)
        {
            temp = [data[i].description, data[i].amount, data[i].date];
            this.setState ({
              debitInfo: [...this.state.debitInfo, temp], 
              accountBalance: this.state.accountBalance - data[i].amount, 
              debitAmount : this.state.debitAmount + data[i].amount
            });
        }

      })
      .catch((err) => console.log(err));

      axios.get("https://moj-api.herokuapp.com/credits")
        .then((response) => {
          const data = response.data;

          let temp = [];

          for(let i =0; i< data.length; i++)
          {
              temp = [data[i].description, data[i].amount, data[i].date];
              this.setState ({
                creditInfo: [...this.state.creditInfo, temp], 
                accountBalance: this.state.accountBalance + data[i].amount, 
                creditAmount : this.state.creditAmount + data[i].amount
              });
          }
        })
        .catch((err) => console.log(err));
  }

  updateDebit (event) {
    this.setState({
      accountBalance: this.state.accountBalance - event, 
      debitAmount: this.state.debitAmount + event
    })
  }

  updateDebitInfo(event) {
    this.setState({
      debitInfo :[event, ...this.state.debitInfo]
    })
  }

  updateCredit(event) {
    this.setState({
      accountBalance: this.state.accountBalance + event, 
      creditAmount: this.state.creditAmount + event
    })
  }

  updateCreditInfo(event) {
    this.setState({
      creditInfo: [event, ...this.state.creditInfo]
    })   
  }

 
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
    const DebitsComponent = () =>(<Debits  updateDebit={this.updateDebit} updateDebitInfo = {this.updateDebitInfo} debitInfo={this.state.debitInfo} debitAmount={this.state.debitAmount}/>);
    const CreditComponent = () =>(<Credits  updateCredit={this.updateCredit} updateCreditInfo={this.updateCreditInfo} creditInfo={this.state.creditInfo} creditAmount={this.state.creditAmount}/>);

    return (
        <Router>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
            <Route exact path="/credits" render={CreditComponent}/>
          </Switch>
        </Router>
    );
  }
}

export default App;