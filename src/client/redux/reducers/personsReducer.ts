import * as types from '../actions/action-types';
import { Action, Store } from 'redux';
import { IPerson } from '../actions/person-actions';
import { IPersonAction } from '../actions/action-types';

const initalState: IPerson[] = [
	{
		firstName: 'Bob',
		lastName: 'A',
		number: 1
	}
];

export function personsReducer(state: IPerson[] = initalState, action: IPersonAction = { type: '' }) {
	switch (action.type) {
		case types.ADD_PERSON:
			return [...state, {...action.data}];
		default:
			return state;
	}
}
