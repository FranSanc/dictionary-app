import React from "react";

export default function Phonetic(props) {
    if (props.phonetic.audio)
      return (
        <div className="Phonetic">
          <a href={props.phonetic.audio}>Listen</a>
          <br />

          {props.phonetic.text}
        </div>
      );
      
}
