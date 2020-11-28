import React, { Component } from "react";


import Serch from "./components/Serch";
import MoviCard from "./components/MoviCard";
import Addmovi from "./Addmovi";
import Rating from './components/Rating';



import "./App.css";

export class App extends Component {
  state = {
    movie: [
      {
        Titel: "ICE AGE",
        description: "comedy movie",
        posterUrl: "lady.jpg",
        rate: 3,
      },
      {
        Titel: "Greenland",
        description: "action  movie",
        posterUrl: "Greenland.jpg",
        rate: 5,
      },
      {
        Titel: "Jiu Jitsu",
        description: "Science-fiction movie",
        posterUrl: "Jiu Jitsu.jpg",
        rate: 2,
      },
      {
        Titel: "Train to Busan 2",
        description: "Science-fiction movie",
        posterUrl: "Train to Busan 2.jpg",
        rate: 3,
      },
      {
        Titel: "The Book of Eli",
        description: "Science-fiction movie",
        posterUrl: "The Book of Eli.jpg",
        rate: 5,
      },
      {
        Titel: "ICE AGE",
        description: "comedy movie",
        posterUrl: "mil.jpg",
        rate: 1,
      }
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
      <div  className="app" >
        <Serch     onTextChange={search=>this.setState({text:search})} />
        <Rating  rating={(r)=>this.getRating(r) }/>

        <MoviCard 
            movies={(this.state.text ==='')? (this.dyRating(this.state.movie) || this.dynamicSearch(this.state.movie)): (this.dyRating(this.state.movie)&&this.dynamicSearch(this.state.movie))}
            />
        
        <Addmovi  addMovi={(m)=>this.add(m)}  />

      </div>
    );
  }
}

export default App;
