import React from 'react'
import Search from '../actions/searchaction'
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
      Search: (searchtext)=> dispatch(Search(searchtext) ),
  };
}


class PopularSearchbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {filmsearch:"" }

   }

  
datahandle =(e)=> {
e.preventDefault();
this.props.Search(e.target.value)
this.setState({filmsearch: e.target.value})
}

render () {
return (<nav className="navbar navbar-light bg-light">
<h1 className="glow"> CinePhilia </h1> 
<form className="form-inline">
  <input className="form-control mr-sm-2" list="browsers" name="browser" type="search" placeholder="Search" aria-label="Search" 
  onChange={this.datahandle}/>
</form>
</nav>);

}
}


export default connect(null,mapDispatchToProps)(PopularSearchbar);







 