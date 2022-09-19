import { configureStore, Action, ThunkAction, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
	reducer: rootReducer,
	middleware,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
