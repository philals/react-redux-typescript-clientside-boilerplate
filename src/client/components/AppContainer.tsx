import * as React from 'react';
import { connect, ActionCreator } from 'react-redux';

import PersonGreeterComponent from './PersonGreeterComponent/PersonGreeterComponent';
import AddPersonButton from './PersonAddButton/PersonAddButton';
import { IPerson, addPerson } from '../redux/actions/person-actions';
import { IStore } from '../redux/store/IStore';
import { bindActionCreators } from 'redux';

interface IProps extends React.Props<any> {
	persons: IPerson[];
	addPerson: () => void;
}

class AppContainer extends React.Component<IProps, any> {
	public render() {
		return <div>
			<AddPersonButton addPerson={this.props.addPerson} />
			{this.props.persons.map((person, index) => {
				return <PersonGreeterComponent person={person} key={index} />;
			})}
		</div>;
	}
}

function mapStateToProps(state: any) {
	return {
		persons: state.persons
	};
}

function mapDispatchToProps(dispatch: any) {
	return {
		addPerson: () => {
			let person: IPerson = {
				firstName: 'Bob',
				lastName: 'The Builder',
				number: new Date().getUTCMilliseconds()
			};
			dispatch(addPerson(person));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
