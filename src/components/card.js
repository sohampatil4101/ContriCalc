import React, { useState } from 'react'
import '../App.css';

export default function Card(props) {
    
    const [data, setData] = useState({
        text:"",
        number:""
    })
    function onchange(e){
        console.log(data.text, data.number)
        setData({...data, [e.target.name]: e.target.value}) 
        
    }

  return (
    <>
        <input type="text" name='text' value={data.text} onChange={onchange}/>
        <input type="number" name='number' value={data.number} onChange={onchange}/>
        <div className="add">
            <button onClick={props.setcount}>+</button>
        </div>
    </>
  )
}
