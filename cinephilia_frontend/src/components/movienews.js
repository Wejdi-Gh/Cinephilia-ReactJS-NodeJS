import React from 'react';


class Movienews extends React.Component  {
    constructor(props) {
      super(props)
      this.state= { hidearticle :true}

      
     }

     onclick =()=> {

        this.setState({hidearticle:!this.state.hidearticle})
     }

     render () {return(
         
<div className="main">
    <h2>{this.props.news.title}</h2>
    <div className="article">
    <div className="articleimage"><img src={this.props.news.image} alt="..."/></div>
   
    <div className="articletext">
    <p>{this.props.news.article} </p>
    <p style={{display:this.state.hidearticle?"none":""}}> {this.props.news.seemore}  </p>
    <a onClick={this.onclick}>{this.state.hidearticle? "Read More": "See Less"} </a>
   
    </div>
    </div> 
  
  </div>)
}}

const news=[
    {image:"https://static2.srcdn.com/wordpress/wp-content/uploads/2019/03/Captain-Marvel-on-Avengers-Endgame-poster.jpg?q=50&fit=crop&w=798&h=407", title : "How Captain Marvel's Costume Has Changed For Avengers: Endgame" , article: "When Captain Marvel returns in Avengers: Endgame, she will be wearing a new variation of her colorful costume. Carol Danvers' super suit actually changed numerous times throughout the Captain Marvel movie and her iconic look receives further tweaks when she joins Earth's Mightiest Heroes to battle Thanos." , seemore :"Captain Marvel's evolving movie costume is an ode to how her outfit in Marvel Comics constantly changed with the times. When Carol Danvers gained her superpowers and became Ms. Marvel in 1976, she wore a costume designed by John Romita based on the red, blue and gold gear of Mar-Vell, but with bare legs and midriff. A year later, her costume was revised to cover her midriff. Later, Ms. Marvel donned a black one-piece swimsuit with a gold lightning logo, thigh-high black boots, nearly full arm-length black gloves, and a red sash. The Captain Marvel movie costume worn by Brie Larson is based on the popular 2012 uniform designed by Jamie McKelvie when Carol accepted the Captain Marvel mantle. In the film, Carol's suit is actually her Kree Starforce uniform; she alters and personalizes its colors when she turns her back on the Kree and adopts the role of a superhero." },
    {image:"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/03/Avengers-Endgame-Trailer-Breakdown.jpg?q=50&fit=crop&w=798&h=407" , title : "Avengers: Endgame Trailer 2 Breakdown - 43 Story Reveals & Secrets You Missed" , article:"Discover the biggest reveals from the surprise second trailer for Avengers: Endgame in our breakdown. Marvel is committed to keeping the plot of the fourth Avengers film, which explores the consequences of Avengers: Infinity War, a complete secret. In fact, Kevin Feige has gone so far as to suggest that most footage from the trailers will be lifted from the first 15-20 minutes of the film, so as to limit the number of spoilers.", seemore:"For all that's the case, though, we're now getting to the time when Marvel will need to reveal a little bit more in the Avengers: Endgame marketing. For one thing, although precious little official merchandise was revealed at the New York Toy Fair, it's not going to be long before said merchandise hits the shops. What's more, the post-credits scene of Captain Marvel confirmed that Carol Danvers will be arriving on Earth to join up with the Avengers very early on. It was really only a matter of time before Marvel released a second trailer showcasing Brie Larson's Captain Marvel interacting with some of the OG Avengers."}, 
    {image:"https://static2.srcdn.com/wordpress/wp-content/uploads/2019/03/Guardians-3-2023.jpg?q=50&fit=crop&w=798&h=407" , title : "Guardians of the Galaxy 3 Probably Won’t Release Until 2023" , article: "Disney has officially rehired James Gunn as the writer and director of Guardians of the Galaxy Vol. 3, but the movie likely won't be ready to hit theaters until 2023. Gunn first joined the Marvel Cinematic Universe back in 2012 when he signed on to bring the first Guardians of the Galaxy film to life. Thanks to his vision, style, and music choices, the film became a massive hit, with the Guardians quickly becoming prominent figures in the MCU and Gunn taking some ownership of the larger cosmic side of the shared universe." ,seemore:"Disney has officially rehired James Gunn as the writer and director of Guardians of the Galaxy Vol. 3, but the movie likely won't be ready to hit theaters until 2023. Gunn first joined the Marvel Cinematic Universe back in 2012 when he signed on to bring the first Guardians of the Galaxy film to life. Thanks to his vision, style, and music choices, the film became a massive hit, with the Guardians quickly becoming prominent figures in the MCU and Gunn taking some ownership of the larger cosmic side of the shared universe."},
    {image:"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/03/Star-Trek-Discovery-Red-Angel-Timeline.jpg?q=50&fit=crop&w=798&h=407" , title : "Star Trek: Discovery’s Red Angel Is From Another Timeline - All The Evidence" , article: "Star Trek: Discovery's Red Angel is clearly from an alternate timeline that is similar, but not identical, to the Prime Star Trek timeline. The identity of the Red Angel is the abiding mystery of Star Trek: Discovery season 2, and the series is doing a good job of building up the sense of intrigue.",seemore:"The Red Angel's mysterious plans are at the heart of Star Trek: Discovery. It appears to have chosen Spock and Burnham as its agents, intervening to save Burnham's life when she was just a child. Its goal is also becoming increasingly clear: it's attempting to avert an act of cosmic genocide, working against a rogue artificial intelligence that threatens all organic life in the universe. The being's secrets are sure to be revealed soon, since next week's episode is called The Red Angel, which presumably means the Discovery crew is finally going to unmask the creature. That makes this the perfect time to take stock of what is now a near-certainty: that the Red Angel originates from an alternate future timeline." },
    {image:"https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/Annabelle-movie-poster.jpg?q=50&fit=crop&w=798&h=407" , title : "Annabelle 3 Gets An Official Title of Annabelle Comes Home" , article: "Annabelle 3 - the third entry in Warner Bros' Conjuring spinoff series centered on the haunted doll - has officially been titled Annabelle Comes Home.  Blumhouse Productions may be the biggest overall name in horror right now, but Warner Bros.' New Line Cinema division isn't far behind. New Line has always had a soft spot for horror, often being regarded as The House That Freddy Built, due to A Nightmare on Elm Street being the company's first big successful franchise. In the current decade, New Line's driving horror force has been the James Wan created Conjuring universe.",seemore:"Launched in 2013 with Wan's original Conjuring film, the franchise has so far produced five films, and hauled in over $1.5 billion worldwide at the box office. There's been one direct sequel in The Conjuring 2, a spinoff centered on Annabelle that also earned its own sequel Annabelle: Creation, and last year's additional spinoff The Nun. This summer, a third Annabelle installment is on the way, one that will see the Warrens play a part in the demon-possessed doll's main story for the first time." },
    {image:"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/03/James-Gunn-and-Guardians-of-the-Galaxy-Team-in-Avengers-Infinity-War.jpg?q=50&fit=crop&w=798&h=407" , title : "Why James Gunn Was Rehired For Guardians of the Galaxy 3" , article: " In a surprise move, Disney rehired James Gunn to direct Guardians of the Galaxy Vol. 3 - but why? Last summer, around the time of San Diego Comic-Con, a series of Gunn's old tweets resurfaced that contained messages about pedophilia and rape. Shortly thereafter, Walt Disney Studios chief Alan Horn fired Gunn from Guardians of the Galaxy Vol. 3. It was understandably a shocking decision, one that was considered controversial despite what Gunn's tweets had said.",seemore:"This decision was made without the input from Marvel Studios president Kevin Feige nor Disney CEO Bob Iger, but both executives agreed with Horn's judgment. But just because Gunn was out as director, that didn't mean his influence wouldn't still be there. Later on, it was revealed that Gunn's Guardians of the Galaxy Vol. 3 script would still be used despite the director having been fired - though finding someone to replace him undoubtedly would've been the biggest hurdle. Thankfully, that's no longer the case." },
    {image:"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/03/Thanos-in-Avengers-Infinity-War-with-Infinity-Gauntlet-snap.jpg?q=50&fit=crop&w=798&h=407" , title : "Avengers: Endgame Magazine Cover Gives Armored Thanos New Infinity Gauntlet" , article: " A new magazine cover for Avengers: Endgame puts Thanos back in his full battle armor, but also gives him a new or repaired Infinity Gauntlet. Fans of Marvel Comics waited six years from the first time Thanos' big purple head turned around and smiled at the end of The Avengers to see him truly realized on the big screen, and Avengers: Infinity War made sure it was worth the wait. The Mad Titan made small appearances before, but he showed just how powerful he can be - with or without all six Infinity Stones - during his proper introduction.",seemore:"Thanos was successful by the end of Avengers: Infinity War in acquiring every Infinity Stone so that he could snap his fingers and wipe out half of the universe's population. The simple act eliminated plenty of heroes from the Marvel Cinematic Universe, drastically decreasing the amount of them available for Avengers: Endgame. While the Avengers gear to actually avenge something for the first time, Thanos is relaxing and healing on Titan 2.0 after Thor delivered a nearly fatal blow. " }
    ]


    const Movienewslist=()=> {
        return (

       <div> 
           <h1> Latest News</h1>   
      {  news.map(el => <Movienews news={el}/>) }

      </div> 
        )
        }



export default Movienewslist;






