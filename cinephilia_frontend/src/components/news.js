

import React from "react";
import CarouselFilms from './carousel_films'
import CarouselSeries from './carousel_series'
import { Route,Switch, NavLink } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
const Home =()=>{
  return(
<Router>
<div>
  <div className="navnews">
  <h1 className="glow"> CinePhilia </h1> 
  <div className="newslink">
    <span ><NavLink activeStyle={{color: "#a7222b"}} to = "/MovieNews"> Movies News </NavLink></span>
    <span > <NavLink activeStyle={{color: "#a7222b"}} to = "/SeriesNews"> Series News </NavLink></span>
    </div>
    </div>
 
<Switch>
  
 <Route path="/MovieNews"  component= {CarouselFilms} />
 <Route path="/SeriesNews"  component= {CarouselSeries} />
 </Switch>
 
</div>

</Router>
  )
 
}

export default Home