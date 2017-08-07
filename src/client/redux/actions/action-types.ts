import { IPerson } from './person-actions';
export const ADD_PERSON = 'ADD_PERSON';

export interface IPersonAction {
	type: string;
	data?: IPerson;
}
