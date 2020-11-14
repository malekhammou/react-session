
import './App.css';
import Instruments from './instruments';
import React, { useState,useEffect } from 'react';

const App = () => {
  const [instruments,setInstruments]=useState([
    {id:0,label:"Piano",quantity:1},
    {id:1,label:"Guitrar",quantity:2},
    {id:2,label:"Cello",quantity:5},
    {id:3,label:"Drums",quantity:1},
    {id:4,label:"Saxophone",quantity:1}])
  const [username,setUsername]=useState("")


    useEffect(()=>{
      let username=window.prompt("Who are you?");
      setUsername(username)
    },[])



      const handleIncrement=(instrumentId)=>{
      let newInstruments=[...instruments]
      let instrument=instruments.find(instrument=>instrument.id===instrumentId)
      instrument.quantity+=1
      const index=instruments.indexOf(instrument)
      newInstruments[index]=instrument
      setInstruments(newInstruments)
  
  }
  const handleDecrement=(instrumentId)=>{
    let newInstruments=[...instruments]
    let instrument=instruments.find(instrument=>instrument.id===instrumentId)
    instrument.quantity-=1
    const index=instruments.indexOf(instrument)
    newInstruments[index]=instrument
    setInstruments(newInstruments)

}
  const renderInstrumentClass=(instrumentQuantity)=>{
      return instrumentQuantity===0?"no-more":"instrument-label"
  } 
  return ( <div className="App">
  {username&&<p className="greetings">{`Welcome ${username}! Happy to see you.`}</p>}  
  <Instruments 
  instruments={instruments}
  onIncrement={handleIncrement}
  onDecrement={handleDecrement}
  classRendering={renderInstrumentClass}/>
</div>  );
}
 
export default App;



