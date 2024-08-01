import React, { useState } from 'react';
import '../App.css';
import Card from './card.js';

export default function Maincard() {
  const [count, setCount] = useState(1)
  function setcount(){
    setCount(count + 1)
  }
  const cards = [];

  for (let i = 0; i < count; i++) {
    cards.push(
      <div className="card" key={i}>
        <Card setcount={setcount}/>
      </div>
    );
  }

  return (
    <>
      <div className="main-card">
        {cards}
      </div>
    </>
  );
}
