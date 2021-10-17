import React, {useState} from "react";
import './Card.css'

function Card(props){
    const [flip, setflip] = useState("unflipped");

    let isFlipped = () => {
      if (flip == "unflipped") {
        setflip("flipped");
      } else if (flip == "flipped") {
        setflip("unflipped");
      }
    };



    return(
        <div className={`card-container ${flip}`} onClick={isFlipped}>
            <div className="card-inner-container">
                <div className="face">
                    <h1 className="character">{props.character}</h1>
                </div>

                <div className="back">
                    <p className="pinyin"><b>{props.pinyin}</b></p>
                    <p className="definition">{props.definition}</p>
                </div>
               
               
            </div>
        </div>
    )
}

export default Card
