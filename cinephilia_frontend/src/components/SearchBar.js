import React from 'react'
import Stars from './stars'
import Search from '../actions/searchaction'
import Clear from '../actions/clearsearch'
import Selectsearch from '../actions/select_search'
import { connect } from "react-redux";
import {  FormGroup, Label, Input, FormText } from 'reactstrap';


function mapDispatchToProps(dispatch) {
  return {
      Search: (searchtext)=> dispatch(Search(searchtext) ),
      Clear: ()=> dispatch(Clear()),
      Selectsearch :(selectsearch)=> dispatch(Selectsearch(selectsearch))
  };
}


class Searchbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {filmsearch:"",counterstars : "" , starscolor:"" ,selectsearch:"" }
  

   }

  
         datahandle =(e)=> {
           e.preventDefault();
         this.props.Search(e.target.value)
         this.setState({filmsearch: e.target.value})
         }

         selecthandle =(e)=> {
           e.preventDefault();
           
           switch (e.target.value) {
            case "Action":
            this.props.Selectsearch (28);
              break;
            case "Romance":
            this.props.Selectsearch (10749);
              break;
            case "Drama":
            this.props.Selectsearch (18);
              break;
            case "Thriller" :
            this.props.Selectsearch (53);
              break;
            case "Horror":
            this.props.Selectsearch (27);
              break;
            case "Animation":
            this.props.Selectsearch (16);
              break;
            case "Science Fiction":
            this.props.Selectsearch (878);
            case "":
            this.props.Selectsearch (0);
              break;
          }
         this.setState({selectsearch: e.target.value})
         }

         changestarscolor = (colordata) => {
           this.setState({starscolor : colordata})
          }


          clearall=() =>{
           this.props.Clear()
           this.setState({starscolor: 0})
          }

render () {
return (<nav className="navbar navbar-light bg-light">
 <h1 className="glow"> CinePhilia </h1> 

<form className="form-inline">
  <input className="form-control mr-sm-2" list="browsers" name="browser" type="search" placeholder="Search" aria-label="Search" 
  onChange={this.datahandle}/>
</form>
<FormGroup style={{marginBottom:"28px",textAlign:"center"}}>
          <Label style={{marginBottom:"5px",color:"white"}} for="exampleSelect">Filter By Genre</Label>
          <Input style={{cursor:"pointer"}} type="select" name="select" id="exampleSelect" onChange={this.selecthandle} >
          <option> </option>
            <option>Action</option>
            <option>Romance</option>
            <option>Drama</option>
            <option>Thriller</option>
            <option> Science Fiction </option>
            <option>Horror</option>
            <option> Animation</option>
          </Input>
        </FormGroup> 
<div style={{marginBottom:"28px",marginRight:"20px"}}>
<p style={{textAlign:"center",marginBottom:"5px",color:"white"}}>Filter By Rate</p>
<div className="starfilter">
<Stars starscolor={this.state.starscolor} starcolor={this.changestarscolor}/>
<i class="fas fa-times fa-2x" onClick ={this.clearall} ></i>
</div>
</div>
</nav>);

}
}


export default connect(null,mapDispatchToProps)(Searchbar);







 