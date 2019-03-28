
import React from "react";
import Coverflow from 'react-coverflow'
import Serienewslist from './seriesnews'

const CarouselSeries =()=>{
  return(
    <div className="filmnewscontainer">
    <h1>On TV <hr/> </h1> 
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
      <a href='https://www.themoviedb.org/tv/37680-suits' target='_blink'> <img
        src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/nVz7cZZ59PsCLgiWFC0M0N6AFC3.jpg'
        alt='title or description'
        style={{ display: 'block', width: '100%' }} 
      /> </a>
    </div >
    <a href='https://www.themoviedb.org/tv/44217-vikings'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/94gP9uXNdbypwCLORjeurlad15Z.jpg' alt='title or description' /> </a>
    <a href='https://www.themoviedb.org/tv/75006-umbrella-academy'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/uYHdIs5O8tiU5p6MvUPd2jElOH6.jpg' alt='title or description' /> </a>
    <a href='https://www.themoviedb.org/tv/62688-supergirl'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/vqBsgL9nd2v04ZvCqPzwtckDdFD.jpg' alt='title or description' /> </a>
    <a href='https://www.themoviedb.org/tv/46952-the-blacklist'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/bgbQCW4fE9b6wSOSC6Fb4FfVzsW.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/67198-star-trek-discovery'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/aJTSeqG43514TewIuS9hiHvbero.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/1402-the-walking-dead'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/bjU4tLlyp8W4yTB0Hqn8J1IDUnD.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/60708-gotham'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/4XddcRDtnNjYmLRMYpbrhFxsbuq.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/4614-ncis'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/eoj15m14Zpf2bUWXqNIs7itZK9w.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/1399-game-of-thrones'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/69050-riverdale'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/gskv297rlbyzLaTU1XZf8UBbxp0.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/60735-the-flash'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/fki3kBlwJzFp8QohL43g9ReV455.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/1412-arrow'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/67116-lethal-weapon'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/jbMZkxLHVDSKiZh0HppCthRW96k.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/62710-blindspot'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/iAkEexatzMUlCXlbS8Gmvlic9gQ.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/17610-ncis-los-angeles'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/n00Z61xNqk84AY9oT7wTdHuYZWn.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/63210-shadowhunters'target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/66YHvvVduC21xcMXPpBBF0ywyVZ.jpg' /> </a>
    <a href='https://www.themoviedb.org/tv/71712-the-good-doctor' target='_blink'><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/z1K4mJwISETia59rrnMdXxzoSrZ.jpg' /> </a>
  
  </Coverflow>
  <Serienewslist/>
  </div>) 
}

export default CarouselSeries 