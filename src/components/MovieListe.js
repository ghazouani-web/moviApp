import React from "react";
import { Card, Button } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';


import Rate from "./Rate";

export default function MovieListe(props) {
  const rating = (rate) => {
    let arr = [];
    for (let i = 0; i <= rate; i++) {
      arr.push(<Rate key={i} />);
    }
    return arr;
  };

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.el.posterUrl} />
        <Card.Body>
          <Card.Title> {props.el.Titel}</Card.Title>
          <Card.Text> {props.el.description} </Card.Text>
          <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={props.el.rate}
            
          />
        </Card.Body>
      </Card>
    </div>
  );
}
