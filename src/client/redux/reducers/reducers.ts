import { createStore, Reducer, combineReducers } from 'redux';
import { Store } from 'react-redux';
import { personsReducer } from '../reducers/personsReducer';
import { IStore } from '../store/IStore';

const rootReducer = combineReducers({
	persons: personsReducer
});

export default rootReducer;
