import React from 'react';
import '../App.css';

export default function Card({ data, setCardData }) {
  function onchange(e) {
    const newData = { ...data, [e.target.name]: e.target.value };
    setCardData(newData);
  }

  return (
    <>
      <input type="text" name="text" value={data.text} onChange={onchange} />
      <input type="number" name="number" value={data.number} onChange={onchange} />
    </>
  );
}
