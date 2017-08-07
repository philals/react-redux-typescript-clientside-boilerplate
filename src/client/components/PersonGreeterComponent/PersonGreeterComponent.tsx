import * as React from 'react';
import greetings from '../../utils/greetings';
import { IPerson } from '../../redux/actions/person-actions';

export interface IPersonGreeterProps {
	person: IPerson;
}

require('./PersonGreeterComponent.scss');

export default (props: IPersonGreeterProps) => (
	<div className="person-greeter">
		<p>{greetings[props.person.number % 3]} {props.person.firstName} {props.person.lastName} - PersonGreeterComponent</p>
	</div >
);
