import React, { Component } from 'react';
import './App.css';
import { Route,Switch, NavLink } from "react-router-dom";
import main_serie_api from "../src/components/main_serie_api";
import Mainmoviesapi from './components/mainmoviapi';
import News from './components/news';
import starslist from './components/popularstarslist';
import Home from './components/home';
import { BrowserRouter as Router} from "react-router-dom";
import Logoutacess from './actions/logout'
import { connect } from "react-redux";
import Setting from './components/setting_account'


const Logout = ({history, Logoutacess}) => {
  
  return <div className="logouticon" onClick={() => {
    if (window.confirm("Are you sure you want to Log Out?")){
    history.push('/')
    Logoutacess()}
    }} >
     <i class="fas fa-sign-out-alt fa-2x"> </i>
     <span >Log out</span>
     </div>
}

function mapDispatchToProps(dispatch) {
  return {
     Logoutacess: ()=> dispatch(Logoutacess ())

  };
}

class Platform extends Component {

  constructor(props) {
    super(props);
  
}


  render() {
    return (
   <Router >
<div className="App">
<div className="container-fluid m-0 p-0">
  <div className="row">
    <div className ="col-sm-1 sidebar ">
    <div className ="routelinks">
       <p> <NavLink  activeStyle={{color:"#a7222b"}} exact to = "/platform"> Home </NavLink> </p> 
       <p> <NavLink activeStyle={{color: "#a7222b"}} exact to = "/MovieNews"> News </NavLink> </p> 
       <p> <NavLink activeStyle={{color: "#a7222b"}} exact to = "/Series"> Series</NavLink> </p> 
       <p> <NavLink activeStyle={{color: "#a7222b"}} exact to = "/Movies"> Movies</NavLink> </p> 
       <p> <NavLink activeStyle={{color: "#a7222b"}} exact to = "/Stars"> Stars </NavLink> </p>    
       <div className="settingbutton">
          <NavLink activeStyle={{color: "#a7222b"}} exact to = "/Setting"> <i class="fas fa-user-cog fa-2x"></i>   
          <span >Setting</span> </NavLink>
        </div>
        <Route path="*" render={({history}) => <Logout history={history} Logoutacess={this.props.Logoutacess}/>}/>
    </div>
    </div>
    <div className ="col-sm-11 filmcontainer">
     <Switch>
        <Route exact path="/platform"  component= {Home} />
        <Route path="/MovieNews"  component= {News} />
        <Route path="/Series"  component= {main_serie_api} />
        <Route path="/Movies"  component= {Mainmoviesapi} />
        <Route path="/Stars"  component= {starslist} />
        <Route path="/Setting" component= {Setting} />
       
     </Switch>
     </div>
     </div>
     </div>
     </div>
     </Router>
    );
  }
}

export default  connect(null,mapDispatchToProps)  (Platform);
