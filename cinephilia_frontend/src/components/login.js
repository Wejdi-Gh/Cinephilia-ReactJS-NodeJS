import React, { Component } from "react";
import {  FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
import Loginacess from '../actions/login'
import { connect } from "react-redux";
import axios from 'axios'
import FacebookLogin from 'react-facebook-login';



var passwordHash = require('password-hash');
function mapDispatchToProps(dispatch) {
  return {
     Loginacess: ()=> dispatch(Loginacess ()) 
    
  };
}

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state={ 
                email:"",
                password:"",
                 checkedemail: false,
                 checkedfbemail: true,
                 checkedpassword:true,
                 fbloggedin:false,
                }
}


componentDidMount() {
  axios.get(`/Member`)
.then(res=>this.setState({membersdata:res.data}))
.catch(err=> alert(err.data.message)) 
      }


chekmailccess=(e)=>{
  
this.setState({email:e.target.value})

const chekedmember=this.state.membersdata.filter(el=>el.email === e.target.value)

if (chekedmember.length){
   this.setState({checkedemail:true,chekedmember:chekedmember})
   
  }

  else this.setState({checkedemail:false,checkedpassword:false})
}



chekpasswordccess=(e)=>{
  
  this.setState({password:passwordHash.generate(e.target.value)})
  
  const chekpassword=this.state.chekedmember.filter(el=> passwordHash.verify(e.target.value,el.password))
  
  if ( chekpassword.length){
     this.setState({checkedpassword:true})
       
    }
  else this.setState({checkedpassword:false})
  }



 onclickchangepath=(e)=>{
    e.preventDefault()
     if (this.state.checkedemail && this.state.checkedpassword){
      let memberemail ={email:this.state.email.toLowerCase()}
      localStorage.setItem("memberemail", JSON.stringify(memberemail));
         this.props.Loginacess()
         let path = `/platform`;
         this.props.history.push(path);
         }
  }
 
  responseFacebook= (response)=> {
    if (response.email != undefined) {

     this.setState({ fbloggedin:true })

    const  chekedmember=this.state.membersdata.filter(el=>el.email === response.email.toLowerCase())
    
    if (chekedmember.length){
      this.setState({checkedfbemail:true})
     }

      else this.setState({checkedfbemail:false})

   if (this.state.fbloggedin && this.state.checkedfbemail) {  
    let memberemail ={email:response.email.toLowerCase()}
    localStorage.setItem("memberemail", JSON.stringify(memberemail));
    this.props.Loginacess()
      let path = `/platform`
      window.location.reload(true)
      this.props.history.push(path) 
     
  }
  } 
} 


  render() {
    return (
      <div className="login">
     <div className="form">
        <FormGroup>
          <Label for="email">Enter Your email </Label>
          <Input className={!this.state.email.length? "" :this.state.checkedemail?"is-valid":"is-invalid"}name="email" type="email" onChange={this.chekmailccess}   />
          <FormFeedback valid>Sweet! that validemail  is valid </FormFeedback>
          <FormFeedback invalid> Oh noes! Email does not exist , please sign up </FormFeedback>
          <FormText> mail form exemple : name@example.com</FormText>
        </FormGroup> 

        
        <FormGroup>
          <Label for="password"> Enter Your Password </Label>
          <Input className={!this.state.password.length? "" :this.state.checkedpassword?"is-valid":"is-invalid"} name="password" type="password" onChange={this.chekpasswordccess}   />
          <FormFeedback valid>Sweet! that name is valid</FormFeedback>
          <FormFeedback invalid>Oh noes!  Please Verify your Password</FormFeedback>
          <FormText>Enter your Valid Password.</FormText>
        </FormGroup>
        <div className="singupformbutton">
      
      <a className="plan-get-started" id="select-get-started" onClick={this.onclickchangepath}  style={{color:"#fff"}}> Login </a>
      </div>
   </div>

     <div className="loginsocial"> 
    <FacebookLogin appId="2110360519255731" autoLoad={false} fields="name,email,picture" onClick={this.componentClicked} callback={this.responseFacebook}  icon="fa-facebook fa-2x" /> 
    <FormFeedback style={{display: !this.state.checkedfbemail ?"block":"none"}}> Oh noes! Email does not exist , please sign up! </FormFeedback>
    <div > You Must Login into your Facebook account First and than Click Login ! </div >
    </div>
      
</div>
    );
  }
}

export default connect(null ,mapDispatchToProps) (Login )