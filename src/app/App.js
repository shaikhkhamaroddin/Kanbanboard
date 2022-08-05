import React, { useState } from 'react';
import './App.css';
import { KanbanColumn, TextInput,Button } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { addbacklog } from '../app/KanbanSlice'
import { isAlphaNumeric } from '../utils/utils';
import {HEADING} from '../enum';
function App() {
  const data = useSelector((state: RootState) => state.kanban)
  const dispatch = useDispatch();
  const [nameinput,setName] = useState("");

  const handleSubmit = () => {
    if (nameinput !== "") {
      dispatch(addbacklog(nameinput));
    } else {
      alert('Please add name');
    }
  }

  const handleChange=(event)=>{
    const isValid = isAlphaNumeric(event.target.value)
    if(isValid){
      setName(event.target.value);
    }else{
      alert('Only alphanumeric allowed!');
    }
  }

  return (
    <div>
      <h2 className='text-center margin-top10'>
        {HEADING}
      </h2>
      <div className="form-inline form-block" >
        <div className="form-group mx-sm-3 mb-2" >
          <label htmlFor="addBacklog" className="sr-only">Add Backlog</label>
          <TextInput type={"text"} id={'addBacklog'} placeholder={'Backlog name'} name={'backloginput'}
          value={nameinput} onChange={handleChange}/>
        </div>
        <Button className="btn btn-primary mb-2" onClick={handleSubmit} title="Add backlog" />
      </div>
    <div className="flex-container">
      {data && data.map(item =>
        <KanbanColumn  {...item} />
      )}
        </div>
    </div>
  );
}

export default App;
