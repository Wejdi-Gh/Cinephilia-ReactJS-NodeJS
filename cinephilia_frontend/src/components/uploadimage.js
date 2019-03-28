import React, { Component } from "react";
import axios from 'axios'


class Imageupload extends Component {
    constructor(props) {
      super(props);
    this.state = { slectedimage : ""}
    }

   imageselector =(e)=> {
        
    this.setState({slectedimage: e.target.files[0]})

        }


  fileupload=()=>{

    axios.post('/uploadimage/:email', this.state.newmember )
    .then( )
    .catch(err => alert("cant send data")) 
 

  }

             
    render() {
      return (
        <form action='/images' method="post" enctype="multipart/form-data">
          <input type='file' onChange= {this.onclick} name='image' />
             </form> 
   
      );
    }
  }


  
  export default  Imageupload 