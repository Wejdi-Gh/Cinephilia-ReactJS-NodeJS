
import Homenavbar  from './home_navbar'
import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import cover3 from '../image/cover1.jpg'
import cover2 from '../image/cover2.PNG'
import cover1 from '../image/cover3.jpeg'
import cover4 from '../image/cover4.jpeg'
import cover5 from '../image/cover5.PNG'
import cover6 from '../image/cover6.jpg'
import cover7 from '../image/cover7.jpg'
import cover8 from '../image/cover8.jpg'
import cover9 from '../image/cover9.jpg'
import cover10 from '../image/cover10.jpg'
import cover11 from '../image/cover11.jpg'
import Footer from './home_footer'
import Homebody from './home_body'

const items = [
    { src: `${cover5}`,header: 'Welcome to CinePhilia'},{src: `${cover3}`} , { src: `${cover4}`},{ src: `${cover11}`},
    { src: `${cover9}`},{src: `${cover2}`},{src: `${cover10}`},{src: `${cover6}`},{src: `${cover1}`},{src: `${cover8}`},{src: `${cover7}`}
     ];
  
  const Home= () => (
      <div>   
  <Homenavbar />
  <UncontrolledCarousel items={items} />
  <Homebody />
  <Footer/>
  </div>
)
export default Home