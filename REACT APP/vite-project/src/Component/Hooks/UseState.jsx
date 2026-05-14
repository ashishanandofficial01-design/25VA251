import React, { useState } from 'react'

function UseState() {
    //change paragraph color
    const[color,setcolor]=useState('red');

    const mouseover=()=>{
        setcolor(color=='red'?'blue':'red');
    }

    //increment decrement reset
    const[count,setcount]=useState(0);

    const increment=()=>{
        setcount(count+1);
    }

    const decrement=()=>{
        setcount(count-1);
    }

    const reset=()=>{
        setcount(0)
    }
  return (
  <>
    <div>UseState Hooks</div>
    <p style={{color:color}} onMouseOver={mouseover}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente magnam amet omnis dolor totam enim harum, cupiditate laudantium sunt nihil, deleniti atque labore itaque inventore quae ea voluptatibus quia?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt quibusdam necessitatibus minus. Perferendis nam, minima error rem saepe omnis cumque non maiores voluptatum quod eligendi! In amet ipsum recusandae.
    </p>

    <div style={{backgroundColor:"#000"}}>
        <h2>{count}</h2>
        <button onClick={increment}>+</button><br></br>
        <button onClick={decrement}>-</button><br></br>
        <button onClick={reset}>Reset</button><br></br>
    </div>
</>
  )
}

export default UseState;