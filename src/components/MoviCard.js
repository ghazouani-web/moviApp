import React from "react";

import MovieListe from "./MovieListe";



export default function MoviCard(props) {
  return (
    <div className="chay">
      {props.movies.map((el) => (
        <React.Fragment>
          <MovieListe el={el}   />
        </React.Fragment>
      ))}

    </div>
  );
}
