import { configureStore } from "@reduxjs/toolkit";
import sequencerReducer from '../features/sequencer/sequencerSlice'

export const store = configureStore({
  reducer: {
      // This is where we will put our reducers later
      sequencer: sequencerReducer
  }
})
