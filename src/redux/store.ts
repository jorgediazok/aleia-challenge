import { createStore } from 'redux';
import { menuReducer } from './reducers/menuReducer';

export const store = createStore(menuReducer);
