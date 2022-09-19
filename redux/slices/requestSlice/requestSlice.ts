import { createSlice } from '@reduxjs/toolkit';

const request = createSlice({
	name: 'request',
	initialState: 0,
	reducers: {
		createRequest: (state) => state,
		updateRequest: (state) => state,
	},
});

export const {
	reducer: requestSlice,
	actions: { createRequest, updateRequest },
} = request;
