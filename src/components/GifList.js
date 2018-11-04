// presentational component
//renders a top level ul with each gif as an li
import React from "react";
const GifList = props => {
  return (
    <ul>
      <li>
        <iframe
          src={props.gifs[0]}
          width="384"
          height="480"
          frameBorder="0"
          allowFullScreen
        />
      </li>
      <li>
        <iframe
          src={props.gifs[1]}
          width="384"
          height="480"
          frameBorder="0"
          allowFullScreen
        />
      </li>
      <li>
        <iframe
          src={props.gifs[2]}
          width="384"
          height="480"
          frameBorder="0"
          allowFullScreen
        />
      </li>
    </ul>
  );
};
export default GifList;
