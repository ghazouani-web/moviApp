import React, { Component } from "react";


import Serch from "./components/Serch";
import MoviCard from "./components/MoviCard";
import Addmovi from "./Addmovi";
import Rating from './components/Rating';

import Video from "./Video"



import "./App.css";
import {BrowserRouter  as Router , Route} from 'react-router-dom';

export class App extends Component {
  state = {
    movie: [
      {
        id:1,
        Titel: "ICE AGE",
        description: "comedy movie",
        posterUrl: "lady.jpg",
        rate: 3,
        lien:"https://www.youtube.com/watch?v=mKIC30W8APM",
      },
      {
        id:2,
        Titel: "Greenland",
        description: "action  movie",
        posterUrl: "Greenland.jpg",
        rate: 5,
        lien:"https://www.youtube.com/watch?v=-Ib1qBkoKKs",

      },
      {
        id:3,
        Titel: "Jiu Jitsu",
        description: "Science-fiction movie",
        posterUrl: "Jiu Jitsu.jpg",
        rate: 2,
        lien:"https://www.youtube.com/watch?v=YhIxOqv5Cs0",

      },
      {
        id:4,
        Titel: "Train to Busan 2",
        description: "Science-fiction movie",
        posterUrl: "Train to Busan 2.jpg",
        rate: 3,
        lien:"https://www.youtube.com/watch?v=SyqW1AdprZ0",

      },
      {
        id:5,
        Titel: "The Book of Eli",
        description: "Science-fiction movie",
        posterUrl: "The Book of Eli.jpg",
        rate: 5,
        lien:"https://www.youtube.com/watch?v=aBQiKv1p_-U",

      },
      
    ],
    rating:1,
    text:"",
  };



  add=(newMovie)=>{
    this.setState({movie: this.state.movie.concat(newMovie)})
  }


  getRating=(valueRating)=>{
    this.setState({rating:valueRating});
  }


  dyRating = () => {
    return ( this.state.movie.filter( el =>
      ( el.rate===this.state.rating) || ( this.state.rating===1)))
  }


  dynamicSearch = () => {
    return ( this.state.movie.filter( el =>
       el.Titel.toLowerCase().includes(this.state.text.toLowerCase() )))
      }


  render() {
    return (

     
    <Router>



         <div  className="app" >
       
          
        <Serch     onTextChange={search=>this.setState({text:search})} />
        <Rating  rating={(r)=>this.getRating(r) }/>

        <Route    path="/"exact    component={()=> <MoviCard 
            movies={(this.state.text ==='')? (this.dyRating(this.state.movie) || this.dynamicSearch(this.state.movie)): (this.dyRating(this.state.movie)&&this.dynamicSearch(this.state.movie))}
            /> }/>
        
        <Route    path="/"exact    component={ ()=> <Addmovi  addMovi={(m)=>this.add(m)} />} />

        <Route    path="/video/:id"    component={()=><Video    trouve={ this.state.movie} />   }  />


         </div>
  
        

      </Router>
    );
  }
}

export default App;
