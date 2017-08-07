import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import AppContainer from './components/AppContainer';
import rootReducer from './redux/reducers/reducers';
import { IStore } from './redux/store/IStore';

let store: Store<any> = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</ Provider>,
	document.getElementById('app')
);
