import React from 'react';


class Serienews extends React.Component  {
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
    <p>{this.props.news.article}  </p>
    <p style={{display:this.state.hidearticle?"none":""}}> {this.props.news.seemore} </p>
    <a onClick={this.onclick}> {this.state.hidearticle? "Read More": "See Less"}</a>
    </div>
    </div> 
  
  </div>)
}}

const news=[
    {image:"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/03/The-Blacklist-Season-6.jpg?q=50&fit=crop&w=798&h=407", title : "NBC Renews The Blacklist for Season 7, Entire Cast Signed to Return" , article: "NBC is bringing back The Blacklist for a seventh season after the entire cast agreed to return. The Universal owned channel first debuted the thriller/drama in 2013, and it immediately became a big hit for them. With James Spader leading the way and a prime Monday night slot, The Blacklist was a ratings giant and very well received by audiences and critics alike. The popularity gave NBC confidence to move the series to a new time slot, where it's remained a consistent performer despite a drastic fall off from season one. " , seemore :" Now in its sixth season, the series continues to follow Spader as ex-government agent Raymond Red Reddington and Megan Boone as Elizabeth Keen. The show is currently in the middle of a storyline dedicated to Red being imprisoned and forced to plead guilty in an effort to devise an escape. While he's been busy with life in prison, Keen and the task force have continued to hunt down people on the blacklist. With still half of the season to go though, The Blacklist's fate has already been revealed." },
    {image:"https://static1.srcdn.com/wordpress/wp-content/uploads/2018/11/Justice-League-Flash-Ezra-Miller.jpg?q=50&fit=crop&w=798&h=407", title : "WB May Recast Flash, Ezra Miller Writing His Own Script in Attempt to Keep Role" , article: " Ezra Miller may be recast as the star of The Flash unless the darker script he's writing can change Warner Bros. and DC Films' minds. Miller joined the DC fold a few years back as part of Zack Snyder's vision for a larger DC universe when he first cameoed in Batman v Superman: Dawn of Justice. As his role in the world grew, though, plans for a solo movie had trouble settling into place." , seemore :"The project went through several different directors before Game Night's John Francis Daley and Jonathan Goldstein were hired last year. Despite the promise of their addition, The Flash has not found it any easier to get off the ground. The multiple delays have frustrated those eager to see Miller's take on Barry Allen given star treatment instead of a supporting role like he had in Justice League. Now, we may know why the film has taken so long to get off the ground, as Miller may be recast in the role. " },
    {image:"https://static2.srcdn.com/wordpress/wp-content/uploads/2019/03/American-Gods-Season-2-Character-Guide.jpg?q=50&fit=crop&w=798&h=407", title : "American Gods Renewed for Season 3 with New Showrunner" , article: " Starz has officially renewed American Gods for a third season just one week after the premiere of season two. The network also announced that there will be yet another new showrunner for season three, replacing Jesse Alexander in the role.American Gods, based on the book of the same name by popular author Neil Gaiman, premiered back in 2017 to stellar reviews. This was mostly credited to the ambitious writing style of creators Bryan Fuller and Michael Green" , seemore :" Due to some behind-the-scenes troubles involving budgetary concerns, however, both Fuller and Green left American Gods. Alexander soon stepped into the role long enough for filming on the series' second season to take place, but he was essentially fired from the role late last year due to further behind-the-scenes problems. While the second season of American Gods has received a more mixed response compared to the first thus far, Starz is apparently unswayed and has seen fit to renew the show early into its sophomore outing." }, 
    {image:"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/03/One-Tree-Hill.jpg?q=50&fit=crop&w=798&h=407", title : "One Tree Hill Guest Stars, Ranked" , article: " One of the most popular teen drama TV shows from the early 2000s was One Tree Hill – a show set in the fictional town of Tree Hill, North Carolina following the lives of the Scott brothers and their closest friends, love interests, and family members. The first four seasons were set in high school, while the later five seasons followed the characters in their adulthood" , seemore :"Over the course of nine seasons, One Tree Hill introduced tons of characters and naturally had a lot of guest stars. Some amazed us with their outstanding performances, and others surprised us by merely being on the show. There have been many interesting guest stars on One Tree Hill and picking the ten most memorable wasn't easy, but we gave it a shot. " }, 
    {image:"https://static3.srcdn.com/wordpress/wp-content/uploads/2017/06/Game-of-Thrones-season-7-Jon-Snow.jpg?q=50&fit=crop&w=798&h=407", title : "Kit Harington & Emma Stone Hosting Saturday Night Live Next Month" , article: "Game of Thrones star Kit Harington and The Favourite Oscar nominee Emma Stone will both take on hosting duties next month on Saturday Night Live. It's already been a star-studded year for SNL, with Idris Elba, Don Cheadle, John Mulaney, Halsey, James McAvoy and Rachel Brosnahan all taking their turns hosting during 2019. " , seemore :"The job of hosting SNL is of course one of the most prestigious gigs in all of show business, but it can also be a minefield for performers who aren't up to the task. Historically, the show has thrived with actors and comedians in hosting duties, and indeed some stars like Steve Martin, Alec Baldwin, Tom Hanks and John Goodman have done well enough to host multiple times, joining the famed 5 Timers Club.The show tends to falter when giving hosting duties to athletes, politicians and random famous people, but even in those cases, classic moments can sometimes be created. " }, 
    {image:"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/03/Esai-Morales-Deathstroke-Titans-DC-Universe.jpg?q=50&fit=crop&w=798&h=407", title : "DC Universe's Titans TV Show Casts Esai Morales As Deathstroke For Season 2" , article: "Deathstroke is headed to the DC Universe (streaming service, that is) as the flagship series Titans announces veteran character actor Esai Morales has been cast as the famed assassin. The man with the monocular mask has a long history with DC’s former teen heroes, and given the dark nature of the live-action series so far, it’s not hard to imagine he’ll be well suited to tussling with the likes of Robin, Starfire, Hawk, Dove, Beast Boy, and Raven. Though given how prone to violence this iteration of the team is, Slade Wilson may find himself switching tactics once he’s finally introduced to the world of subscription streaming television. " , seemore :"Deathstroke is also one of the more versatile and dependable villains in the DC Universe roster, which might explain why this is the third live-action version of the character. Morales will follow in the footsteps of Manu Bennett, who brought the character to life as more of an anti-hero and pseudo-mentor to Stephen Amell’s Oliver Queen in The CW’s Arrow.  " }, 
    {image:"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/02/The-Walking-Dead-Negan-and-Glenn.jpg?q=50&fit=crop&w=798&h=407", title : "TWD: 5 Characters Whose Departure Hurt the Series (And 5 We Could Care Less About)" , article: "Once one of the most popular shows on television, amassing monumental ratings with every episode, The Walking Dead has never had any qualms about killing characters.After the series earned a cult following, TWD executives developed an inflated sense of confidence and began making decisions that would knowingly incense their massive fanbase. Now they are facing the consequences. " , seemore :" Sometimes, when a character departs, it can leave the fanbase devastated. Other times, TWD deaths are trivial, barely evoking a reaction from the audience. Both of these cases can be equally damaging to the show; immense ratings are now dwindling and The Walking Dead is starting to show its age." },  
   
    ]


    const Serienewslist=()=> {
        return (

       <div> 
           <h1> Latest News</h1>   
      {  news.map(el => <Serienews news={el}/>) }

      </div> 
        )
        }



export default Serienewslist;






