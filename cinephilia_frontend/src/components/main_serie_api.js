import React, { Component } from 'react';
import Searchbar from './SearchBar'
import Apiserie from './serieapi'


class Mainserieapi extends Component {
    constructor(props) {
        super(props)
    
       
     
       }

     render() {
        return (<div>
<Searchbar />
 <div className="margin"></div>
 <Apiserie  />
 </div>

) }
 }

export default Mainserieapi