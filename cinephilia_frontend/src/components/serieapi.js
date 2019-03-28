import React from 'react';
import Stars from './stars'
import axios from "axios";
import { connect } from "react-redux";


const mapStateToProps = state => {
  return { ...state};
};




 const Card = (props)=> <div className="card" >
    <img src={`https://image.tmdb.org/t/p/w500/${props.film.poster_path}`} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.film.original_name}</h5>
      <Stars starscolor={Math.round(props.film.vote_average/2)}/>
      <p> {props.film.overview}</p>
      <a className="btn btn-warning" onClick={()=>props.play(props.film.id)}> See More </a>
    
    </div>
  </div>
   
   


class Apiserie extends React.Component  {
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
      axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=4ace3fe68ae5a10120b01abb692f8b4a&language=en-US&page=${this.state.apiincriment}`) ,
      axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=4ace3fe68ae5a10120b01abb692f8b4a&language=en-US&page=${this.state.apiincriment+1}`),
    ])
    .then(axios.spread((filmlist1, filmlist2)=> this.setState({ tab:filmlist1.data.results.concat(filmlist2.data.results) })
  
    ))
     
    }
  
    componentDidMount() {
      axios.all([
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=4ace3fe68ae5a10120b01abb692f8b4a&language=en-US&page=1') ,
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=4ace3fe68ae5a10120b01abb692f8b4a&language=en-US&page=2'),
      ])
      .then(axios.spread((filmlist1, filmlist2)=> this.setState({ tab:filmlist2.data.results.concat(filmlist1.data.results) })
   
      ))
  }
  


  playmovie=(id)=> window.open(`https://www.themoviedb.org/tv/${id}`,'_blank' )

  duplicate = (el, index, arry) =>{ 
     return arry.indexOf(el) !== index }

     searchfilm =(el) => {
      if (el.original_name.toLowerCase().indexOf(this.props.Searchreducer.filmsearch )!==-1) return el 
      }
 
      searchrate= (el) => {
        if (this.props.Ratestars.rateindex=== 0 ) return el
        if (Math.round(Math.round(el.vote_average/2)) === this.props.Ratestars.rateindex) return el
        }
        
        selectsearch =(el) => {
          if (this.props.Selectsearch.selectsearch === 0 ) return el
          if (el.genre_ids[0] === this.props.Selectsearch.selectsearch) return el 
          }

render () {
  const selectsearchfilter=this.state.tab.filter(this.selectsearch)
  const titleratefilter=this.state.tab.filter(this.searchrate ).filter(this.searchfilm)
  const finalfilter=titleratefilter.concat(selectsearchfilter).filter(this.duplicate)


 return ( <div > 
   <div className="filmlist"> 
 
   {finalfilter.map((el,i )=> <Card addevent={this.addevent} play={this.playmovie} key={i} film={el} />)}
   
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
    
export default connect(mapStateToProps) (Apiserie );


  