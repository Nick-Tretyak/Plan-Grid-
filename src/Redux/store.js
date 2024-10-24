import { createStore } from 'redux';
import inputReducer from './reducers';

const store = createStore(inputReducer);

export default store;
