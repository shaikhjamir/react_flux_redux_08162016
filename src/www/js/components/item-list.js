import React from 'react';

class MyComponent extends React.Component {
	render() {
		return <h1>Hi!</h1>;
	}
}


function MyComponent(props) {
	React.Component.call(this, props);
}

MyComponent.prototype = Object.create(React.Component);
MyComponent.prototype.constructor = MyComponent;

MyComponent.prototype.render = function() {
	return <h1>Hi!</h1>;
};



export const ItemListComponent = props => {

	this

	this.doIt2 = () => {
		props.doIt();
	};

	return <div>
		<ul>{props.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
		<button type="button" onClick={doIt2}>Do It!</button>
	</div>;
};