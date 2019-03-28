import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { Card,CardText, CardBody, CardLink,CardTitle, CardSubtitle } from 'reactstrap';
import PopularSearchbar from './popularstars_navbar'

const mapStateToProps = state => {
  return { ...state};
};

 const Starscard = (props)=> (
    <div>
      <Card style={{height:"530px",width:"280px"}}>
        <CardBody style={{height:"25px"}}>
          <CardTitle><span style={{fontWeight:"bold",color:"#a7222b",fontSize:"20px"}}> {props.people.name} </span></CardTitle>
          <CardSubtitle> <span style={{fontWeight:"bold"}}> Popularity :</span> {props.people.popularity}</CardSubtitle>
        </CardBody>
        <img style={{width:"100%"}} src={`https://image.tmdb.org/t/p/w500/${props.people.profile_path}`} alt="Card image cap" />
        <CardBody style={{height:"75px"}}>
          <CardText style={{height:"75px",marginBottom:"0px"}} > <span style={{fontWeight:"bold"}} >Known for :</span> {props.people.known_for.map(el=>el.title + ", ")} </CardText>
          <a style={{marginTop:"0px",color:"rgb(25, 25, 236)"} } onClick={()=>props.play(props.people.id)}>More Details </a>
        </CardBody>
      </Card>
    </div>)


class Starslist extends React.Component  {
  constructor(props) {
    super(props)
    this.state= { tab: [],apiincriment:1}
    
    this.apicharge=this.apicharge.bind(this)
    
   }

 updateapionclick = ()=> {this.setState({apiincriment: this.state.apiincriment+2})
 
 window.scrollTo(0, 0)
}

updateapionclickdecriment = ()=> {
  if (this.state.apiincriment > 1){
  this.setState({apiincriment: this.state.apiincriment-2})
 
window.scrollTo(0, 0)}
}


componentDidUpdate=() => this.apicharge()

  apicharge() {
    axios.all([
      axios.get(`https://api.themoviedb.org/3/person/popular?api_key=4ace3fe68ae5a10120b01abb692f8b4a&language=en-US&page=${this.state.apiincriment}`) ,
      axios.get(`https://api.themoviedb.org/3/person/popular?api_key=4ace3fe68ae5a10120b01abb692f8b4a&language=en-US&page=${this.state.apiincriment+1}`),
    ])
    .then(axios.spread((filmlist1, filmlist2)=> this.setState({ tab:filmlist1.data.results.concat(filmlist2.data.results) })
  
    ))
     
    }
  
    componentDidMount() {
      axios.all([
        axios.get('https://api.themoviedb.org/3/person/popular?api_key=4ace3fe68ae5a10120b01abb692f8b4a&language=en-US&page=1') ,
        axios.get('https://api.themoviedb.org/3/person/popular?api_key=4ace3fe68ae5a10120b01abb692f8b4a&language=en-US&page=2'),
      ])
      .then(axios.spread((filmlist1, filmlist2)=> this.setState({ tab:filmlist2.data.results.concat(filmlist1.data.results) })
   
      ))
  }
  moredetails=(id)=> window.open(`https://www.themoviedb.org/person/${id}`,'_blank' )


  searchfilm =(el) => {
      if (el.name.toLowerCase().indexOf(this.props.Searchreducer.filmsearch )!==-1) return el 
      }
 
render () {

   const tab2=this.state.tab.filter(this.searchfilm)

 return ( <div > 

<PopularSearchbar />
<div className="filmlist"> 
 
   {tab2.map((el,i )=> <Starscard  addevent={this.addevent} play={this.moredetails} key={i} people={el} />)}
   
   </div>
   <div class="prevnext"> 
   <div className="loadmore"> 
   <i class="fas fa-angle-double-left" onClick={this.updateapionclickdecriment}></i>
   <input type="button" value="Previous" className="next" onClick={this.updateapionclickdecriment}/> 
   </div>
   <div className="loadmore"> 
   <input type="button" value="Next" className="next" onClick={this.updateapionclick}/> 
   <i class="fas fa-angle-double-right" onClick={this.updateapionclick}></i>
   </div>
   </div>
    </div>
  
  );
  
 }

}
    
export default connect(mapStateToProps) (Starslist );


  