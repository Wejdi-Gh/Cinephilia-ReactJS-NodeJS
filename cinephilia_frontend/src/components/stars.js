import React from 'react';
import StarsRate from '../actions/startsrate-action'
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
      Starsrate: (starindex)=> dispatch(StarsRate(starindex) )
  };
}


const Stars=({starscolor,Starsrate=( )=>{}, starcolor=( )=>{}}) => {

    let tabstars = []
   
    for(let i=0;i<5;i++){
    
 const Onclickhandle = () => {
      Starsrate(i+1) 
      starcolor(i+1)
    }

      if(i < starscolor){
        tabstars.push(<i className="fas fa-star fa-2x faa-pulse animated isyellow" onClick={Onclickhandle} ></i>)
      }
      else
      tabstars.push(<i className="fas fa-star faa-pulse animated fa-2x"  onClick={Onclickhandle} ></i>)

    }
    return <div className="heart">{tabstars}</div>
    
  }

  export default connect(null,mapDispatchToProps)(Stars);







 