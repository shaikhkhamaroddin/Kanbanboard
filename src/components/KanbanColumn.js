import React from 'react';
import { Card } from '../components';
import { useDispatch } from 'react-redux'
import { moveleft, moveright,deleteTicket } from '../app/KanbanSlice'
function KanbanColumn(props) {
  const { title, cards, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="col-container">
      <div className='col-item' >
        <h2 className='text-center margin-top10'>{title}</h2>
        {
          cards && cards.map(item =>
            <Card  {...item}
              columnId={id}
              moveLeft={() => dispatch(moveleft({ columnId: id, cardId: item.cid }))}
              moveRight={() => dispatch(moveright({ columnId: id, cardId: item.cid }))}
              deleteTicket={() => dispatch(deleteTicket({ columnId: id, cardId: item.cid,name:item.name }))}
            />
          )
        }
      </div>
    </div>
  );
}

export default KanbanColumn;
