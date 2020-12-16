import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'


function Video(props) {
  let id = useParams();
  console.log(id)
  let data = props.trouve.find((el) => 

    el.id == id.id
  );

  /* for(let i = 0 ; i <=props.trouve.length-1;i++){
        
        if (props.trouve[i].id == id.id){
            data = props.trouve[i];
            console.log(data)
            break;
        }
    } */
  return (
    <div>
      {data.description}
      <br></br>
      {data.id}
      <ReactPlayer url={data.lien} />

    </div>
  );
}

export default Video;
