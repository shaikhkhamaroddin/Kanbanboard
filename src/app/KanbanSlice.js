import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: 1,
    title: 'Backlog',
    cards: [
      { name: 'tasks 1', stage: 0, cid: uuidv4() },
      { name: 'tasks 2', stage: 0, cid: uuidv4() },
    ],
  },
  {
    id: 2,
    title: 'Todo',
    cards: [],
  },
  {
    id: 3,
    title: 'InProgress',
    cards: [],
  },
  {
    id: 4,
    title: 'Done',
    cards: [],
  },
];

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addbacklog: (state, action) => {
      state[0].cards.push({ name: action.payload, stage: 0, cid: uuidv4() })
    },
    deleteTicket: (state, action) => {
      const { columnId, cardId, name } = action.payload;
      if (window.confirm(`Are you sure want to delete ticket ${name}?`)) {
        let columnInfo = state.findIndex(item => item.id === columnId)
        const cardIndex = state[columnInfo].cards.findIndex(item => item.cid === cardId); // get index of ticket
        state[columnInfo].cards.splice(cardIndex, 1); // remove element
      }
    },
    moveright: (state, action) => {
      const { columnId, cardId } = action.payload;
      let columnInfo = state.findIndex(item => item.id === columnId)
      let nextColumn = state.findIndex(item => item.id === columnId + 1)
      const cardIndex = state[columnInfo].cards.findIndex(item => item.cid === cardId); // get index of ticket
      state[nextColumn].cards.push(state[columnInfo].cards[cardIndex]); // add element
      state[columnInfo].cards.splice(cardIndex, 1); // remove element
    },
    moveleft: (state, action) => {
      const { columnId, cardId } = action.payload;
      let columnInfo = state.findIndex(item => item.id === columnId)
      let prevColumn = state.findIndex(item => item.id === columnId - 1)
      const cardIndex = state[columnInfo].cards.findIndex(item => item.cid === cardId); // get index of ticket
      state[prevColumn].cards.push(state[columnInfo].cards[cardIndex]); // add element
      state[columnInfo].cards.splice(cardIndex, 1); // remove element
    },
  }
});

export const { moveright, moveleft, deleteTicket, addbacklog } = kanbanSlice.actions;

// export const selectCount = (state) => state.counter.value;

export default kanbanSlice.reducer;
