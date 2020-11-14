import React from 'react';
const Instrument = ({id,quantity,label,onIncrement,onDecrement,classRendering}) => {
    return ( <li className="instrument"  >
    <button  onClick={()=>onIncrement(id)} className="controls">+</button>
        <p  className={classRendering(quantity)}>{quantity===0?`Want a ${label}?
         `:`${label}:${quantity}`}</p>
    <button disabled={quantity===0} onClick={()=>onDecrement(id)} className="controls">-</button>
    </li> );
}
 
export default Instrument;

