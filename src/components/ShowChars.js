import React, {useEffect, useState} from "react";
import Card from "./Card";
import './ShowCards.css'

function ShowCards(){
    
    const [cards, setCards] = useState([])
    const [limited, setlimited] = useState([])

    useEffect(() => {
      // fetching items using an async function
      const fetchClothes = async () => {
    
        const response = await fetch(
          "https://hsk-6-wordlist-api.herokuapp.com/hsk6"
        );
        const resp = await response.json();
        setCards(resp)
        let ltd = resp.slice(0, 51)
        setlimited(ltd)
        console.log(cards[0]);
        
      };
      fetchClothes();
    }, []);

    

    return (
      <div className='cards-grid'>
        {/* LIMITED; IN DEVELOPMENT */}
        {limited.map((e) => (
          <Card character={e.character} pinyin={e.pinyin} definition = {e.definition}/>
        ))}
      </div>
    );
}

export default ShowCards