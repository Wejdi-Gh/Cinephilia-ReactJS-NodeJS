import React, { Component } from 'react';
import { Route,Switch, NavLink } from "react-router-dom";
import {Collapse,Navbar, NavbarToggler,Nav,NavItem} from 'reactstrap';
import Signup from './signup'
import Login from './login'
import Payement from './payment'
import PaymentPlan from './paymentplan'
import Homepage from './initial_homepage'
import { BrowserRouter as Router} from "react-router-dom";

class Mainnavbar extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }


    render() {
      return (
        <Router>
        <div>
        <div className="menunavbar">
          <Navbar expand="md">
          <NavLink  exact to = "/"> <h1 className="glow"> CinePhilia </h1> </NavLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
               <NavLink activeStyle={{color: "#a7222b"}} exact to ="/Signup"> Sign Up </NavLink>
   
                </NavItem>
                <NavItem>
             <NavLink activeStyle={{color: "#a7222b"}} exact to = "/Login"> Login </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          </div> 
          <Switch>
               <Route  exact path='/' component={Homepage}/>
               <Route  path='/Signup' component={Signup}  />
               <Route  path='/Login'  component={Login} />
               <Route  path='/Payment' component={Payement} />
               <Route  path='/Paymentplan' component={PaymentPlan} />
               
           </Switch>
           
           </div>
           </Router>
      );
    }
  }
export default Mainnavbar

