import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login';


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state={validfirstname:false,
                validlastname: false , 
                validemail  : false,
                validconfirmemail :false,
                validpassword:false,
                validconfirmpassword:false,
                checkedemailexist :false,
                checkedfbemailexist:false,
                fbloggedin:false,
                mustfblogin:false,
                firstname:"",
                lastname:"",
                email:"",
                confirmemail :"", 
                password:"",
                confirmpassword:""
                }
         }



componentDidMount() {
   axios.get(`/Member`)
        .then(res=>this.setState({membersdata:res.data}))
        .catch(err=> alert(err.data.message)) 
              }
              


validfirstname=(e)=> {
  this.setState({firstname:e.target.value})
  this.regex = /^[A-Za-z]+$/
  if (this.regex.test(e.target.value)){
  
  this.setState({validfirstname:true})}
  else this.setState({validfirstname:false})
  }

  validlastname=(e)=> {
    this.setState({lastname:e.target.value})
    this.regex = /^[A-Za-z]+$/
    if (this.regex.test(e.target.value)){
    
    this.setState({validlastname:true})}
    else this.setState({validlastname:false})
    }
       
   
    validemail=(e)=> {

      this.setState({email :e.target.value.toLowerCase()})
      const chekedmember=this.state.membersdata.filter(el=>el.email === e.target.value.toLowerCase())
      this.regex =/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      if (this.regex.test(e.target.value)){
        this.setState({validemail :true})
      
         if (chekedmember.length){
           this.setState({checkedemailexist:true})                
             }
           else this.setState({checkedemailexist:false,validconfirmemail:false})
      }  
    
         else this.setState({validemail :false,validconfirmemail:false})
    
    }
      
      

      confirmemail=(e)=> {
        this.setState({confirmemail :e.target.value.toLowerCase()})

        if (this.state.email === e.target.value.toLowerCase()){
        
        this.setState({validconfirmemail:true})}
        else this.setState({validconfirmemail :false})
        }
        
        validpassword=(e)=> {
          this.setState({password:e.target.value})

          this.regex =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
      
                if (this.regex.test(e.target.value)){
                this.setState({validpassword:true})}
                else this.setState({validpassword:false,validconfirmpassword:false})
          }

          
    
          confirmpassword=(e)=> {
            this.setState({confirmpassword:e.target.value})
            if (e.target.value===this.state.password ){   
            this.setState({validconfirmpassword:true})}
            else this.setState({validconfirmpassword:false})
            }

            onclickchangepath=(e)=>{
               e.preventDefault()
               this.setState({mustfblogin:false})
               let newmember ={firstname:this.state.firstname,lastname:this.state.lastname,
                email:this.state.email.toLowerCase(), confirmemail:this.state.confirmemail.toLowerCase() , 
                password:this.state.password , confirmpassword:this.state.confirmpassword}
                 
                let memberemail ={email:this.state.email.toLowerCase()}

                localStorage.setItem("signupdata", JSON.stringify(newmember));
                localStorage.setItem("memberemail", JSON.stringify(memberemail));

               if (this.state.validfirstname && this.state.validlastname && this.state.validemail && this.state.validconfirmemail && this.state.validpassword && this.state.validconfirmpassword && !this.state.checkedemailexist){

            let path = `Paymentplan`;
            this.props.history.push(path)
   
          } 
            }

            responseFacebook=(response)=> {

              if (response.name != undefined) {
                 this.setState({fbloggedin :true})
                let fbfirstname = response.name.split(" ")[0]
                let fblastname = response.name.split(" ")[1]
                let newmember ={firstname:fbfirstname,lastname:fblastname,email:response.email.toLowerCase() }
                let memberemail ={email:response.email.toLowerCase()}
                const chekedmember=this.state.membersdata.filter(el=>el.email === response.email.toLowerCase())
                
                if (chekedmember.length){
                  this.setState({checkedfbemailexist:true ,mustfblogin:false})                
                    }
                  else this.setState({checkedfbemailexist:false})

  
                if (this.state.fbloggedin && !this.state.checkedfbemailexist) {  
                  localStorage.setItem("signupdata", JSON.stringify(newmember));
                  localStorage.setItem("memberemail", JSON.stringify(memberemail));
                let path = `/Paymentplan`;
                 this.props.history.push(path)}

              }

           else { this.setState({mustfblogin:true})}
             
            } 
           
           
  render() {
    return (
      <div>
        <h1 style={{marginTop:"100px", textAlign:"center"}} > Sign Up and be a CinePhile </h1>
      <h5 style={{textAlign:"center"}}> Step 1/3 </h5>
      <div className="signup">
      <div>
      
      <div className="signupform">
      
      <Form>
       <FormGroup>
          <Label for="firstname"> Enter Your First Name</Label>
          <Input name="firstname" className={ !this.state.firstname.length ? "" :this.state.validfirstname?"is-valid":"is-invalid"}  onChange={this.validfirstname} />
          <FormFeedback valid>Sweet! that name is Valid </FormFeedback>
          <FormFeedback invalid> Oh noes! that name is invalid</FormFeedback>
          <FormText>must be a combination of charatacters only.</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="lastname">Enter Your Last Name</Label>
          <Input name="lastname" className={!this.state.lastname.length ? "" :this.state.validlastname ? "is-valid":"is-invalid"}  onChange={this.validlastname}  />
          <FormFeedback valid>Sweet! that name is Valid </FormFeedback>
          <FormFeedback invalid>Oh noes! that name is invalid </FormFeedback>
          <FormText> must be a combination of charatacters only </FormText>
        </FormGroup>

        <FormGroup>
          <Label for="email">Enter Your email </Label>
          <Input name="email" type="email" className={!this.state.email.length ? "" :(this.state.validemail&& !this.state.checkedemailexist)? "is-valid":"is-invalid"}  onChange={this.validemail}  />
          <FormFeedback valid>Sweet! that validemail  is valid </FormFeedback>
          <FormFeedback invalid>{this.state.checkedemailexist ? "Oh noes! that email already exists , please login" :"Oh noes! that email  is invalid"}</FormFeedback>
          <FormText> mail form exemple : name@example.com</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="confirmemail"> Confirm Your valid email </Label>
          <Input name="confirmemail" onPaste="return false" type="email " className={!this.state.confirmemail.length ? "" :this.state.validconfirmemail? "is-valid":"is-invalid"}  onChange={this.confirmemail}  />
          <FormFeedback valid>Sweet! mail confirmed </FormFeedback>
          <FormFeedback invalid>Oh noes!The Confirm E-mail Address field does not match the E-mail Address field</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="password"> Enter Your Password </Label>
          <Input name="password" type="password" className={ !this.state.password.length ? "" :this.state.validpassword? "is-valid":"is-invalid"}   onChange={this.validpassword} />
          <FormFeedback valid>Sweet! that password is valid</FormFeedback>
          <FormFeedback invalid>Oh noes! that password is invalid</FormFeedback>
          <FormText>The password must has at least than 8 characters and must be a combination of charatacters , numbers ,at least one special character and at least a capital letter.</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="confirmpassword"> Confirm Your Password </Label>
          <Input name="confirmpassword" type="password" className={!this.state.confirmpassword.length ? "" :this.state.validconfirmpassword? "is-valid":"is-invalid"} onChange={this.confirmpassword} />
          <FormFeedback valid>Sweet! password confirmed</FormFeedback>
          <FormFeedback invalid>Oh noes! The Confirm Password field does not match the Password field.</FormFeedback>
        </FormGroup>
        <div className="singupformbutton">
        
        <a className="plan-get-started" id="select-get-started" onClick={this.onclickchangepath}  style={{color:"#fff"}}> Sign Up </a>
        </div>
      </Form>
      </div>  

</div>
<div className="vl"></div>

  <div className="signupsocial">

  <FacebookLogin appId="2110360519255731" autoLoad={false} fields="name,email,picture" onClick={this.componentClicked} callback={this.responseFacebook} textButton="Sign up with Facebook" icon="fa-facebook fa-2x" /> 
  <FormFeedback style={{display: this.state.checkedfbemailexist ? "block":"none"}}> Oh noes! that email already exists , please login ! </FormFeedback>
  <div > You Must Login into your Facebook account First and than Click SignUp ! </div >
  </div>
  </div>

  </div> 
    
    );
  }
}

export default   Signup 