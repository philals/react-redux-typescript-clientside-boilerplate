import * as types from './action-types';
import { IPersonAction } from './action-types';

export interface IPerson {
	firstName: string;
	lastName: string;
	number: number;
}

export const addPerson = (person: IPerson) => {
	return {
		type: types.ADD_PERSON,
		data: person
	} as IPersonAction;
};
