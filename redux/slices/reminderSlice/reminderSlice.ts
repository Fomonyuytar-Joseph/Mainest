import { createSlice } from '@reduxjs/toolkit';

const reminder = createSlice({
	name: 'reminder',
	initialState: 0,
	reducers: {
		createReminder: (state) => state,
		updateReminder: (state) => state,
	},
});

export const {
	reducer: reminderSlice,
	actions: { createReminder, updateReminder },
} = reminder;
