import React, { Component } from 'react';
import './App.css';
import Platform from './platform'
import Mainhome from './components/initial_navbar'
import { connect } from "react-redux";


const mapStateToProps = state => {
  return { ...state.Platformaccess};
};


class App extends Component {
  constructor(props) {
    super(props);
    

}

  render() {
   
  if (this.props.platformaccess) {
    
    return <Platform />;
  }
  return <Mainhome /> ;
 
  }
}

export default connect(mapStateToProps) (App);
