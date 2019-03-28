import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
import axios from 'axios'
import Homenavbar from './home_navbar'
import { connect } from "react-redux";
import Logoutacess from '../actions/logout'




var passwordHash = require('password-hash');

function mapDispatchToProps(dispatch) {
    return {
       Logoutacess: ()=> dispatch(Logoutacess ())
  
    };
  }

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state={validfirstname:true,
                validlastname: true , 
                validpassword:false,
                validconfirmpassword:false,
                validactualpassword : false,
                firstname:"",
                actualpassword:"",
                lastname:"",
                password:"",
                confirmpassword:"",
                member:"" ,
                havepassword:true
                }
         }
    
  componentDidMount() {
    let emailmember = localStorage.getItem("memberemail");
    emailmember = JSON.parse(emailmember)
    
    axios.get(`/Member/${emailmember.email}`)
    .then( res=>{
        
    this.setState({member:res.data})
    this.setState({firstname:res.data.firstname,lastname:res.data.lastname})
    if (res.data.password === undefined) {

      this.setState ({havepassword:false,validactualpassword:true})
         }
    }
   )
    .catch(err=> alert("cant get data")) 
    
    }


validfirstname=(e)=> {
  this.setState({firstname:e.target.value})
  this.regex = /^[A-Za-z]+$/
  if (!(this.regex.test(e.target.value))){
  
  this.setState({validfirstname:false})}
  else this.setState({validfirstname:true})
  }

  validlastname=(e)=> {
    this.setState({lastname:e.target.value})
    this.regex = /^[A-Za-z]+$/
    if (!(this.regex.test(e.target.value))){
    
    this.setState({validlastname:false})}
    else this.setState({validlastname:true})
    }
       
    validactualpassword=(e)=> {
       
        this.setState({actualpassword:e.target.value})
              if (passwordHash.verify(e.target.value, this.state.member.password)){
              this.setState({validactualpassword :true})}
              else this.setState({validactualpassword :false})
    

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

       
      updatemember=()=> {

     if (!this.state.password.length){
        
   if ( this.state.validfirstname && this.state.validlastname ){
   
    let updatedmember = {firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.member.email} 
    axios.put (`/modifymember/${this.state.member.email}`, updatedmember )
         .then((res)=>alert('Your Account Has been Updated'))
         .catch(err=> console.log(err))
         window.location.reload(true)

              }}

    else {
     
        if ( this.state.validfirstname && this.state.validlastname && this.state.password && this.state.validactualpassword  && this.state.validconfirmpassword && this.state.validpassword ){
   
            let updatedmember = {firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.member.email,password:this.state.password} 
            axios.put (`/modifymember/${this.state.member.email}`, updatedmember )
                 .then((res)=>alert('Your Account Has been Updated'))
                 .catch(err=> console.log(err))
                 window.location.reload(true)
                      }
    }          

}

removecontact=(e) => {
    e.preventDefault()
    axios.delete(`/removemember/${this.state.member.email}`)
    
    .then(()=>{
          if (window.confirm("Are you sure you want to delete your Acount?")){
            this.props.Logoutacess()
            this.props.history.push('/')
            window.location.reload(true)  
         }
         })
         .catch(err=> alert("Your Account cant be removed")) 
        
          }


       responseFacebook=(response)=> {

              this.setState({ fbloggedin:true })

              let fbfirstname = response.name.split(" ")[0]
              let fblastname = response.name.split(" ")[1]
              let newmember ={firstname:fbfirstname,lastname:fblastname,email:response.email.toLowerCase() }

              const chekedmember=this.state.membersdata.filter(el=>el.email === response.email.toLowerCase())
              
              if (chekedmember.length){
                this.setState({checkedfbemailexist:true})                
                  }
                else this.setState({checkedfbemailexist:false})
          
              
              localStorage.setItem("signupdata", JSON.stringify(newmember));

              if (this.state.fbloggedin && !this.state.checkedfbemailexist) {  
              let path = `Paymentplan`;
               this.props.history.push(path)}
            } 
           
           
  render() {
    return (
      
      <div className="mainsetting" > 


      <Homenavbar />
     
      <div className="setting">
     
      <Form>
       <div className="dtailssetting">
      <h5> Name Setting :</h5>
      <div className="passwordsetting">
       <FormGroup>
          <Label for="firstname"> Modify Your First Name</Label>
          <Input Value={this.state.member.firstname} name="firstname" className={ !this.state.firstname.length ? "" :this.state.validfirstname?"is-valid":"is-invalid"}  onChange={this.validfirstname} />
          <FormFeedback valid>Sweet! that name is Valid </FormFeedback>
          <FormFeedback invalid> Oh noes! that name is invalid</FormFeedback>
          <FormText>must be a combination of charatacters only.</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="lastname">Modify Your Last Name</Label>
          <Input Value={this.state.member.lastname} name="lastname" className={!this.state.lastname.length ? "" :this.state.validlastname ? "is-valid":"is-invalid"}  onChange={this.validlastname}  />
          <FormFeedback valid>Sweet! that name is Valid </FormFeedback>
          <FormFeedback invalid>Oh noes! that name is invalid </FormFeedback>
          <FormText> must be a combination of charatacters only </FormText>
        </FormGroup>
        
        <FormGroup>
          <Label for="email"> Your email </Label>
          <Input Value={this.state.member.email}  name="email" type="email" className="is-valid"   readOnly />
          <FormFeedback style={{display:"block"}} invalid> Sorry you can't change Your Email </FormFeedback>
         
        </FormGroup>
        </div>
        </div>

        <div className="dtailssetting "> 
        <h5> Password Setting :</h5>
         <div className="passwordsetting password">
        <FormGroup>
          <Label style ={{display:!this.state.havepassword? "none":"block"}} for="password"> Enter Your Actual Password </Label>
          <Input style ={{display:!this.state.havepassword? "none":"block"}} name="password" type="password" className={ !this.state.actualpassword.length ? "" :this.state.validactualpassword? "is-valid":"is-invalid"} onChange={this.validactualpassword}  />
          <FormFeedback valid>Sweet! that password is valid</FormFeedback>
          <FormFeedback invalid>Oh noes! that password is invalid</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="password"> {!this.state.havepassword? "Add a Password for direct Login":"Enter Your New Password"} </Label>
          <Input name="password" type="password" className={ !this.state.password.length ? "" :this.state.validpassword? "is-valid":"is-invalid"}   onChange={this.validpassword} />
          <FormFeedback valid>Sweet! that password is valid</FormFeedback>
          <FormFeedback invalid>Oh noes! that password is invalid</FormFeedback>
          <FormText>The password must has at least than 8 characters and must be a combination of charatacters , numbers ,at least one special character and at least a capital letter.</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="confirmpassword"> Confirm Your New Password </Label>
          <Input name="confirmpassword" type="password" className={!this.state.confirmpassword.length ? "" :this.state.validconfirmpassword? "is-valid":"is-invalid"} onChange={this.confirmpassword} />
          <FormFeedback valid>Sweet! password confirmed</FormFeedback>
          <FormFeedback invalid>Oh noes! The Confirm Password field does not match the Password field.</FormFeedback>
        </FormGroup>
        </div>
        </div>
       
      </Form>

      <div className="singupformbutton">
      <a className="plan-get-started" id="select-get-started" onClick={this.updatemember}  style={{ backgroundColor:"white",color:"black",marginBottom:"20px}"}}> Update  </a>
     </div>

   </div>

   <div className="singupformbutton">
      <a className="plan-get-started" id="select-get-started" onClick={this.removecontact}  style={{color:"#fff"}}> <i class="far fa-trash-alt"></i> Delete My Account  </a>
     </div>
   </div>  

    );
  }
}

export default connect(null,mapDispatchToProps) (Setting)