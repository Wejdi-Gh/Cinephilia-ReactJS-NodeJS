

import React from "react";
import Coverflow from 'react-coverflow'
import Movienewslist from './movienews'

const CarouselFilms =()=>{
  return(
    <div className="filmnewscontainer" >
    <h1>In Theaters</h1>
 <Coverflow
    width={960}
    height={480}
    displayQuantityOfSide={2}
    navigation={false}
    enableHeading={false}
  >
    <div
      role="menuitem"
      tabIndex="0"
    >
      <a href='https://www.themoviedb.org/movie/458723-us' target='_blink'> <img
        src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg'
        alt='title or description'
        style={{ display: 'block', width: '100%' }} 
      /> </a>
    </div >
    <a href='https://www.themoviedb.org/movie/424694-bohemian-rhapsody'target='_blink'><img src='https://image.tmdb.org/t/p/original/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg' alt='title or description' /> </a>
    <a href='https://www.themoviedb.org/movie/299536-avengers-infinity-war'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' alt='title or description' /> </a>
    <a href='https://www.themoviedb.org/movie/480530-creed-ii'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg' alt='title or description' /> </a>
    <a href='https://www.themoviedb.org/movie/512196-happy-death-day-2'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/whtt9F8PFqvEgc4fDSHZPkitFk4.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/166428-how-to-train-your-dragon-3'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/297802-aquaman'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/399579-alita-battle-angel'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/xRWht48C2V8XNfzvPehyClOvDni.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/450465-glass'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/400650-mary-poppins-returns'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/299537-captain-marvel'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/245891-john-wick'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/b9uYMMbm87IBFOq59pppvkkkgNg.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/332562-a-star-is-born'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/335983-venom'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/122917-the-hobbit-the-battle-of-the-five-armies'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/9zRzFJuaj0CHIOhAkcCcFTvyu2X.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/375588-robin-hood-origins'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/452832-serenity'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg' /> </a>
    <a href='https://www.themoviedb.org/movie/491418-instant-family'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/xYV1mODz99w7AjKDSQ7h2mzZhVe.jpg' /> </a>
  
  </Coverflow>

  <Movienewslist/>
  </div>) 
}

export default CarouselFilms