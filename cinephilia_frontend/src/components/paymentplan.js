import React, { Component } from 'react';

import { Button, FormGroup, Label, Input} from 'reactstrap';
      



class PaymentPlan extends Component {
    constructor(props) {
      super(props);
      this.state={ monthprice:10, 
                   semestrialprice : 55, 
                   anualprice:90 , 
                   choose:false ,
                   passprice :"" }
}

onclickchangepath=(e)=>{
    e.preventDefault()
    localStorage.setItem("passprice", JSON.stringify(this.state.passprice));
  
    if (this.state.choose){
 let path = `/Payment`;
 this.props.history.push(path);

}}



    render() {
      return (
     <div className="paymentplan">
        <h1>Choose a Pass that's right for you.</h1>
        <h5> Step 2/3</h5>
        <div className="plancheck">
        <div className="plan-container-wrapper">
<div className="price-enter-disclaimer">
<div className="current-prices" style={{fontWeight:"bold"}} >
<span className="new-plan-price" id="select-price">
<span className="strike-outer"><span class="strike-inner"><span style={{margin:"3px",fontSize:"18px", verticalAlign: "15px"}}>$</span>12/Month</span>
</span>
</span>
</div>
</div>
<div className="gold-ribbon">SAVE up to 15%</div>

<div className="current-prices" style={{fontWeight:"bold"}}>
<span className="new-plan-price"><span style={{margin:"3px",fontSize:"18px", verticalAlign: "15px"}}>$</span>{this.state.monthprice}/Month</span>
 </div>
 
 <ul >
        <li>HD available</li>
         <li>Ultra HD available</li>
         <li>Screens you can watch on at the same time</li>
         <li>Watch on your laptop, TV, phone and tablet</li>
         <li>Unlimited movies and TV shows</li>
         <li>Cancel anytime</li>
     </ul>
     
     <FormGroup check>
        <Label check>
        <Input type="radio" name="radio1" onChange={()=>this.setState({choose:true,passprice:this.state.monthprice})} />{' '}
         <span  style={{fontSize:"14px"}}> Monthly Pass </span>
        </Label>
        </FormGroup>
    </div>

         <div className="plan-container-wrapper">
<div className="price-enter-disclaimer">
<div className="current-prices" style={{fontWeight:"bold"}} >
<span className="new-plan-price" id="select-price">
<span className="strike-outer"><span class="strike-inner"> <span style={{margin:"3px",fontSize:"18px", verticalAlign: "15px"}}>$</span>72/6 Months</span>
</span>
</span>
</div>
</div>
<div className="gold-ribbon">SAVE up to 24%</div>

<div className="current-prices" style={{fontWeight:"bold"}}>
<span className="new-plan-price"><span style={{margin:"3px",fontSize:"18px", verticalAlign: "15px"}}>$</span>{this.state.semestrialprice}/6 Months</span>
 </div>
 
 <ul >
        <li>HD available</li>
         <li>Ultra HD available</li>
         <li>Screens you can watch on at the same time</li>
         <li>Watch on your laptop, TV, phone and tablet</li>
         <li>Unlimited movies and TV shows</li>
         <li>Cancel anytime</li>
     </ul>
     
     <FormGroup check>
        <Label check>
        <Input type="radio" name="radio1" onChange={()=>this.setState({choose:true,passprice:this.state.semestrialprice})} />{' '}
         <span  style={{fontSize:"14px"}}> 6 Months Pass </span>
        </Label>
        </FormGroup>
    </div>


<div className="plan-container-wrapper">
<div className="price-enter-disclaimer">
<div className="current-prices" style={{fontWeight:"bold"}} >
<span className="new-plan-price" id="select-price">
<span className="strike-outer"><span class="strike-inner"><span style={{margin:"3px",fontSize:"18px", verticalAlign: "15px"}}>$</span>154/Year</span>
</span>
</span>
</div>
</div>
<div className="gold-ribbon">SAVE up to 38%</div>

<div className="current-prices" style={{fontWeight:"bold"}}>
<span className="new-plan-price"><span style={{margin:"3px",fontSize:"18px", verticalAlign: "15px"}}>$</span>{this.state.anualprice}/Year</span>
 </div>
 
 <ul >
        <li>HD available</li>
         <li>Ultra HD available</li>
         <li>Screens you can watch on at the same time</li>
         <li>Watch on your laptop, TV, phone and tablet</li>
         <li>Unlimited movies and TV shows</li>
         <li>Cancel anytime</li>
     </ul>
     
     <FormGroup check>
        <Label check>
        <Input type="radio" name="radio1" onChange={()=>this.setState({choose:true,passprice:this.state.anualprice})} />{' '}
         <span  style={{fontSize:"14px"}}> Annual Pass </span>
        </Label>
        </FormGroup>
    </div>
     </div>
     <a className="plan-get-started" id="select-get-started" onClick={this.onclickchangepath}  style={{color:"#fff"}}> Next </a>
  
     </div>
      );
    }
  }
export default PaymentPlan




               