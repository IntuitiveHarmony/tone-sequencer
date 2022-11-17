import { createSlice } from '@reduxjs/toolkit'
// import { original } from 'immer'

const initialState = {
  row1: [null, null, null, null, null, null, null, null],
  row2: [null, null, null, null, null, null, null, null],
  row3: [null, null, null, null, null, null, null, null],
  row4: [null, null, null, null, null, null, null, null],
  row5: [null, null, null, null, null, null, null, null],
  row6: [null, null, null, null, null, null, null, null],
  row7: [null, null, null, null, null, null, null, null],
}

export const sequencerSlice = createSlice({
    name: 'sequencer',
    initialState,
    reducers: {
      activateRow1: (state, action) => {
        // state.sequencer.row1[action.payload[0]] = action.payload[1]
        // console.log(original(state.myObject))
        console.log('wtf')
      },
    },
 })


export const { activateRow1 } = sequencerSlice.actions;

export default sequencerSlice.reducer;
