import { combineReducers } from '@reduxjs/toolkit';
import counter from './slices/counterSlice';
import { reminderSlice, requestSlice } from './slices';

const rootReducer = combineReducers({
	request: requestSlice,
	reminder: reminderSlice,
	counter,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
