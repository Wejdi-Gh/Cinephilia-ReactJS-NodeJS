import React, { Component } from 'react';
import Searchbar from './SearchBar'
import Apifilm from './movieapi'


class Mainmoviesapi extends Component {
    constructor(props) {
        super(props)
    
       
     
       }

     render() {
        return (<div>
<Searchbar />
 <div className="margin"></div>
 <Apifilm  />
 </div>

) }
 }

export default Mainmoviesapi