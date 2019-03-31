import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
import Loginacess from '../actions/login'
import { connect } from "react-redux";
import axios from 'axios'
import PaypalButton from './paypal';

function mapDispatchToProps(dispatch) {
  return {
     Loginacess: ()=> dispatch(Loginacess ())

  };
}

const CLIENT = {
  sandbox: 'AUCSVbv-SQYwSbrENV86h5sp2UR8p5ONOCzd_RHZ_XiLkPaggOetHLLDWaoHdQ5gyHzt33Vtg5Z9aKF_',
  production: 'AeCZh187DVxXbKisemT6u7VbVa0wZWQBoVGTr_7xkiE9CTaG8gINDNpd0rCiHrnpY4XxysvgJx0zdcDT',
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';


class Payment extends Component {
  constructor(props) {
    super(props);

    this.state={validfirstname:"" ,
                validlastname: "" , 
                validcardnumber:"",
                validexpirationdate :"",
                validsecuritycode:"",
                firstname:"",
                lastname:"",
                cardnumber:"",
                expirationdate:"",
                securitycode:"",
                modal:false,
                agree:false
                }
    this.toggle = this.toggle.bind(this);
}


toggle() {
  this.setState(prevState => ({
    modal: !prevState.modal
  }));
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
    
  
    validcardnumber=(e)=> {
      this.setState({cardnumber:e.target.value})
      this.regex =/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
      if (this.regex.test(e.target.value)){
      this.setState({validcardnumber:true})}
      else this.setState({validcardnumber:false})
      }

      validexpirationdate=(e)=> {
        this.setState({expirationdate:e.target.value})
        this.gostvalidthru = e.target.value.trim().replace(/\D/g,"").slice(0,4)
        var date = new Date ()
        var year = parseInt(date.getFullYear().toString().slice(2))+5
        var month = parseInt(date.getMonth().toString())+1

        
     
       if (this.gostvalidthru.length>1 ){
           if (((this.gostvalidthru.toString().slice(0,2)<month && this.gostvalidthru.toString().slice(2) < year-4)|| this.gostvalidthru.toString().slice(0,2) > 12) || (this.gostvalidthru.toString().slice(2) > year ) ){ 
           this.setState({validexpirationdate :false})}
           else this.setState({validexpirationdate :true})
        }

        if (this.gostvalidthru.length<4 ){
          this.setState({validexpirationdate :false})}
        
        this.setState({expirationdate:this.gostvalidthru.toString().slice(0,2).concat("/",this.gostvalidthru.toString().slice(2)) })

        }
        
        validsecuritycode=(e)=> {

          this.setState({securitycode:e.target.value})
          this.regex =/^[0-9]{3,4}$/
      
                if (this.regex.test(e.target.value)){
                this.setState({validsecuritycode:true})}

                else this.setState({validsecuritycode:false})
  
          }
    

            onclickchangepath=(e)=>{
               e.preventDefault()
              if (!this.state.agree) alert("please Check Term Of Use")

              else if (this.state.validfirstname && this.state.validlastname && this.state.validcardnumber && this.state.validexpirationdate && this.state.securitycode && this.state.agree ){
                  if (this.state.newmember.password != undefined){
                       axios.post('/addMember', this.state.newmember )
                       .then(res=> alert("Payment Accepted And Wlecome To CinePhilia"+" "+ ` ${this.state.newmember.firstname}`+ " "+ `${this.state.newmember.lastname}`))
                       .catch(err => alert("cant send data")) 
                       this.props.Loginacess()
                       let path = `/platform`;
                       this.props.history.push(path);}

                else {
                         axios.post('/addfbMember', this.state.newmember )
                         .then(res=> alert("Payment Accepted And Wlecome To CinePhilia"+" "+ ` ${this.state.newmember.firstname}`+ " "+ `${this.state.newmember.lastname}`))
                         .catch(err => alert("cant send data")) 
                         this.props.Loginacess()
                         let path = `/platform`;
                         this.props.history.push(path);
                        
                        }

                }
              
              }
          
            


            getdatafromlocalstorage=()=>{
              let newmember = localStorage.getItem("signupdata");
              newmember = JSON.parse(newmember)

              let passprice = localStorage.getItem("passprice");
              passprice = JSON.parse(passprice)


              this.setState({newmember,passprice})
            }
             
            
             componentDidMount() {
              this.getdatafromlocalstorage();
            }


          paypalonSuccess = (payment) =>{
               if (payment.paid){
                alert("Payment Accepted And Welcome To CinePhilia"+" "+ ` ${this.state.newmember.firstname}`+ " "+ `${this.state.newmember.lastname}`)
                axios.post('/addMember', this.state.newmember )
                .then((res)=>alert("Payment Accepted"))
                .catch(err => alert("cant send data")) 
                this.props.Loginacess()
                let path = `/platform`;
                this.props.history.push(path);
                window.location.reload(true)

               }
             console.log('Successful payment!', payment);
            }

         paypalonError = (error) =>
            console.log('Erroneous payment OR failed to load script!', error);
      
         paypalonCancel = (data) =>
            console.log('Cancelled payment!', data);





  render() {

    return (

      <div className="payment">
      <h1> Set up your credit or debit card</h1>
      <h5> Step 3/3</h5>
      <div className="paymentchoice">
      <div>
      <p style={{color:"white",textAlign:"center"}}> Pay With your Credit Card.  </p>
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
          <Input name="lastname" className={!this.state.lastname.length ? "" :this.state.validlastname ? "is-valid":"is-invalid"}  onChange={this.validlastname} />
          <FormFeedback valid>Sweet! that name is Valid </FormFeedback>
          <FormFeedback invalid>Oh noes! that name is invalid </FormFeedback>
          <FormText> must be a combination of charatacters only </FormText>
        </FormGroup>

        <FormGroup>
          <Label for="cardnumber"> Card Number  </Label>
          <Input name="cardnumber" type="text" className={!this.state.cardnumber.length ? "" :this.state.validcardnumber? "is-valid":"is-invalid"} onChange={this.validcardnumber}  />
          <FormFeedback valid>Sweet! that Card Number is valid </FormFeedback>
          <FormFeedback invalid>Oh noes! that validemail  is invalid</FormFeedback>
          <FormText> must be a combination of Numbers only</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="expirationdate"> Expiration Date </Label>
          <Input name="expirationdate" value ={this.state.expirationdate} type="text" className={!this.state.expirationdate.length ? "" :this.state.validexpirationdate? "is-valid":"is-invalid"}  onChange={this.validexpirationdate}  />
          <FormFeedback valid>Sweet! that date is valid</FormFeedback>
          <FormFeedback invalid>must be a date mm/yy </FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="securitycode"> Security Code (CVV) </Label>
          <Input name="securitycode" type="password" className={ !this.state.securitycode.length ? "" :this.state.validsecuritycode? "is-valid":"is-invalid"}    onChange={this.validsecuritycode} />
          <FormFeedback valid>Sweet! that Security Code is valid</FormFeedback>
          <FormFeedback invalid>Oh noes! that Security Code is invalid </FormFeedback>
          <FormText>must be a combination of Numbers only</FormText>
        </FormGroup>
        
        <div className="singupformbutton">
      
       <a className="plan-get-started" id="select-get-started" onClick={this.onclickchangepath}  style={{color:"#fff"}}> Payment</a>
      
      </div>

      </Form>
     
      <div className="condtionterms">

<div className="chekterms">
<Label check> <Input type="checkbox" onChange={()=>this.setState({agree:!this.state.agree})} />{' '} I Agree </Label>

<Button color="danger" onClick={this.toggle}>Terms of Use</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Terms of Use</ModalHeader>
          <ModalBody>
          CinePhilia provides a personalized subscription service that allows our members to access movies and TV shows ("CinePhilia content") streamed over the Internet to certain Internet-connected TVs, computers and other devices ("CinePhilia ready devices").

These Terms of Use govern your use of our service. As used in these Terms of Use, "CinePhilia service", "our service" or "the service" means the personalized service provided by CinePhilia for discovering and watching CinePhilia content, including all features and functionalities, recommendations and reviews, the website, and user interfaces, as well as all content and software associated with our service.

    Membership
        1.1. Your CinePhilia membership will continue month-to-month until terminated. To use the CinePhilia service you must have Internet access and a CinePhilia ready device, and provide us with one or more Payment Methods. "Payment Method" means a current, valid, accepted method of payment, as may be updated from time to time, and which may include payment through your account with a third party. Unless you cancel your membership before your monthly billing date, you authorize us to charge your next month's membership fee to your Payment Method (see "Cancellation" below).
        1.2. We may offer a number of membership plans, including special promotional plans or memberships offered by third parties in conjunction with the provision of their own products and services. We are not responsible for the products and services provided by such third parties. Some membership plans may have differing conditions and limitations, which will be disclosed at your sign-up or in other communications made available to you. You can find specific details regarding your CinePhilia membership by visiting our website and clicking on the "Account" link available at the top of the pages of the CinePhilia website under your profile name.
        Billing and Cancellation

3.1. Billing Cycle. The membership fee for the CinePhilia service and any other charges you may incur in connection with your use of the service, such as taxes and possible transaction fees, will be charged on a monthly basis to your Payment Method on the calendar day corresponding to the commencement of the paying portion of your membership. In some cases your payment date may change, for example if your Payment Method has not successfully settled or if your paid membership began on a day not contained in a given month. Visit our website and click on the "Billing details" link on the "Account" page to see your next payment date. We may authorize your Payment Method in anticipation of membership or service-related charges through various methods, including authorizing it up to approximately one month of service as soon as you register. In some instances, your available balance or credit limit may be reduced to reflect the authorization during your free trial period.
3.2. Payment Methods. To use the CinePhilia service you must provide one or more Payment Methods. You can update your Payment Methods by going to the "Account" page. We may also update your Payment Methods using information provided by the payment service providers. Following any update, you authorize us to continue to charge the applicable Payment Method(s). You authorize us to charge any Payment Method associated to your account in case your primary Payment Method is declined or no longer available to us for payment of your subscription fee. You remain responsible for any uncollected amounts. If a payment is not successfully settled, due to expiration, insufficient funds, or otherwise, and you do not cancel your account, we may suspend your access to the service until we have successfully charged a valid Payment Method. For some Payment Methods, the issuer may charge you certain fees, such as foreign transaction fees or other fees relating to the processing of your Payment Method. Local tax charges may vary depending on the Payment Method used. Check with your Payment Method service provider for details.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
 <p>By checking the checkbox below, you agree to our Terms of Use,</p>
<p> Privacy Statement, and that you are over 18. You may cancel at any </p>
<p>time in your free trial and will not be charged.</p>
 </div>

</div>
<div className="vl"></div>
<div className="paypal">
<p style={{color:"white",textAlign:"center"}}> Pay With PayPal : the Safier , Esier Way To Pay.  </p>
<PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={this.state.passprice}
          onSuccess={this.paypalonSuccess}
          onError={this.paypalonError}
          onCancel={this.paypalonCancel}
           />
           </div>
</div>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps) (Payment)


