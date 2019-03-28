import React, { Component } from "react";
import back1 from '../image/background1.PNG'
import back2 from '../image/background2.PNG'
import Footer from './home_footer'
import { connect } from "react-redux";
import axios from 'axios'

class Homepage extends Component {
  constructor(props) {
    super(props);

}
onclickchangepath=(e)=>{
    e.preventDefault()
  
  let path = `Signup`;
  this.props.history.push(path);
  
  }


  render() {
    return (
    <div>   
  <div className="homepage">
  <h1>If you are a Cinephile , you'll love us</h1>
  <h3>The world's most popular and authoritative source <br/> for movies , TV and celebrity content.</h3>

  <h4> Only $0.3 a Day </h4>
  <a className="plan-get-started" id="select-get-started" onClick={this.onclickchangepath}  style={{color:"#fff"}}> Get started </a>
  </div>

<div className="allaccess">
<h1> All Access </h1>
<img src ={`${back1}`}/>
<img src ={`${back2}`}/>
</div>
<Footer/>
  </div> 
   
    );
  }
}

export default Homepage