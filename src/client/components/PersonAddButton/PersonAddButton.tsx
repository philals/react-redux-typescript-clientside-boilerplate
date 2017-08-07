import * as React from 'react';
import { IPerson } from '../../redux/actions/person-actions';

export interface IHelloProps {
	addPerson: () => void;
}

require('./PersonAddButton.scss');

export default (props: IHelloProps) => (
	<button
		name="addBtn"
		onClick={props.addPerson}>
		Add
	</button>
);
