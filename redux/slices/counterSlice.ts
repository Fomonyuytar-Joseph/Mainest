import { createSlice } from '@reduxjs/toolkit';

const counter = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		add: (state) => (state += 1),
		reduce: (state) => (state -= 1),
	},
});

const { reducer, actions } = counter;

export const { add, reduce } = actions;
export default reducer;
