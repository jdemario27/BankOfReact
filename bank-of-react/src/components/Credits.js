import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Credits.css';

class Credit extends Component {
  constructor(props) {  
    super(props);
    this.submitIt = this.submitIt.bind(this);
  }

submitIt(event){
    event.preventDefault();
       let temp = [event.target.creditDesc.value,
                   event.target.creditAmount.value,
                   new Date().toLocaleString()]
                   
        this.props.updateCredit(Number(event.target.creditAmount.value));
        this.props.updateCreditInfo(temp);
}

  render() {
      
    return (
        <div> 
            <Link to="/">Home</Link>
            <br></br><br></br>
            <Link to="/userProfile">User Profile</Link>
            <br></br><br></br>
            <Link to="/debits">Debits Page</Link>
            <div> 
              <div style={{margin:"10%"}}>
              <h4><div className="cTitle"><h2>Credits: ${(Math.round(this.props.creditAmount* 100) / 100).toFixed(2)}</h2></div></h4>
              <form onSubmit={this.submitIt}>
              <input className="desc" type='text' name="creditDesc" placeholder="Credit Description..." />
              <label> </label>
              <input className="amt" type='number'  name="creditAmount" placeholder="Credit amount..."/>
              <br></br><br></br>
              <input className="bttn" type='submit'/>
              </form> 
              <br></br><br></br>
              <div className="creditsImage">
              <img src="https://png.pngtree.com/png-vector/20190621/ourlarge/pngtree-credit-card-icon-graphic-design-template-vector-png-image_1497699.jpg" width="200" height="200" alt="credit"/>
              </div>
            </div>
            <div>
                {this.props.creditInfo.map ((x , index) =>
                    <div className="creditTable" key = {index}>
                        <p>Description: {x[0]}</p>  
                        <p>Amount: ${x[1]} </p>
                        <p>Date:  {x[2]} </p>
                    </div>
                )}       
              </div>
            </div>
        </div>
    );
  }
}

export default Credit;