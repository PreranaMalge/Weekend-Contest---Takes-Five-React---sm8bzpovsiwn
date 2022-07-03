import React, { useState } from 'react'

import '../styles/App.css';
const App = () => {
  
  const[number,setNumber] = useState(1);
  const LoadNumbers = ({number})=>{
    let divs = [];
    for(let i=0;i<number + 5;i++){
      divs.push(i);
    }
    return(
      <>
      {divs.map((d)=>{
        return<div>{d}</div>
      })}
      </>
    );
  };

  return (
    <div id="main">
     
     <div>{<LoadNumbers number = {number}/>}</div>
     <button id="back-button" onClick={()=>setNumber(number-5)}
     disabled={number ==1?true:false}>Prev page </button>


    <button id="next-button" onClick={()=>setNumber(number+5)}>Next page </button>

      </div>
    
  );
};


export default App;


// In this project we will be displaying 5 numbers with a twist.

// On initial load show numbers from 1 to 5 in individual divs with id="number-display" and two buttons.
// First button will have id="back-button" and text "Prev Page" which will be disabled by default(or whenever we are on first page i.e showing numbers from 1 to 5)
// second button will have id="next-button" and text "Next Page"

// On clicking Next Page button we will display the next 5 numbers, i.e from 6 to 10.
// And since we are on page 2 , the Prev Page button will be enabled, and upon clicking that it takes
// you back to original 1-5 numbers and also disables the back button since we can't go back from page 1.