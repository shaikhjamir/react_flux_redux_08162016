import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class AppComponent extends React.Component {

	render() {

		return React.createElement('h1', null, 'React/Flux/Redux/Relay/GraphQL Starter Project');

		return <h1>React/Flux/Redux/Relay/GraphQL Starter Project!!!</h1>;
	}

}

ReactDOM.render(<AppComponent />, document.querySelector('main'));
