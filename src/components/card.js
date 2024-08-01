import React from 'react'
import '../App.css';

export default function Card(props) {
  return (
    <>
        <input type="text" />
        <input type="number" />
        <div className="add">
            <button onClick={props.setcount}>+</button>
        </div>
    </>
  )
}
