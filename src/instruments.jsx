import React from 'react';
import Instrument from './instrument';

const Instruments  = ({instruments,onIncrement,onDecrement,classRendering}) => {
    return ( <ul className="instruments">
    {instruments.map(instrument=><Instrument 
    key={instrument.id}
    id={instrument.id} 
    label={instrument.label}
    quantity={instrument.quantity}
    onIncrement={onIncrement}
    onDecrement={onDecrement}
    classRendering={classRendering}
    />)}
</ul>  );
}
 
export default Instruments ;



