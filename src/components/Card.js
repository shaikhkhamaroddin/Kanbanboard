import React from 'react';
import { Button } from '.';
function Card(props) {
    const { name, moveLeft, moveRight, columnId,deleteTicket } = props;
    const disabledFlag = (moveString) => {
        if (moveString === 'left' && columnId === 1 || moveString === 'right' && columnId === 4) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div className='flex-container' style={{ height: 80, margin: 10, backgroundColor: '#e3e3e3', justifyContent: 'space-between', alignItems: 'center' }} >
            <h4 className='text-center' style={{ width: 200 }}>{name}</h4>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 150 }}>
                <Button onClick={moveLeft} className="btn btn-primary btn-sm" disabled={disabledFlag('left')} title="&lt;-" />
                <Button onClick={moveRight} className="btn btn-primary btn-sm" disabled={disabledFlag('right')} title="-&gt;"/>
                <Button onClick={deleteTicket} className="btn btn-danger btn-sm" title="Delete"/>
            </div> 
        </div>
    ); 
}

export default Card;
