import React, { useState } from 'react';
import '../App.css';
import Card from './card.js';

export default function Maincard() {
  const [count, setCount] = useState(1);
  const [cardsData, setCardsData] = useState([{ text: "", number: "" }]);

  function addCard() {
    setCount(count + 1);
    setCardsData([...cardsData, { text: "", number: "" }]);
  }

  function updateCardData(index, newData) {
    const updatedCardsData = [...cardsData];
    updatedCardsData[index] = newData;
    setCardsData(updatedCardsData);
  }

    function calculate() {
    const final = cardsData.map(card => ({ ...card }));
    let total = 0
    let payable = 0
    for(let i = 0; i<final.length; i++){
      total = total + parseInt(final[i].number)
    }
    payable = total/count
    console.log('copy:', total, count, payable);
  }
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <div className="card" key={i}>
        <Card data={cardsData[i]} setCardData={(newData) => updateCardData(i, newData)} />
      </div>
    );
  }

  return (
    <>
      <div className="main-card">
        {cards}
      </div>
      <div className="add-card">
        <button onClick={addCard}>Add Card</button>
      </div>
      <div className="calculate">
        <button onClick={calculate}>Calculate</button>
      </div>
    </>
  );
}
