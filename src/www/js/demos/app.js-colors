import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { AppHeaderComponent } from './components/app-header';
import { ItemListComponent } from './components/item-list';
import { ItemFormComponent} from './components/item-form';

const olympicColors = ['red','green','yellow','blue','black'];


class AppComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			colors: this.props.colors.concat()
		};

		this.addColor = this.addColor.bind(this);
	}

	addColor(newColor) {

		this.setState({
			colors: this.state.colors.concat(newColor)
		});

	}

	render() {

		return <div>
			<AppHeaderComponent />
			<ItemListComponent items={this.state.colors} />
			<ItemFormComponent addItem={this.addColor} />
		</div>;
	}

}

ReactDOM.render(<AppComponent colors={olympicColors} />, document.querySelector('main'));
