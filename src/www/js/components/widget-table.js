import React from 'react';

//import { widgetStore } from '../stores/widgets';

export class WidgetTable extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			widgets: []
		};

		this.refreshWidgets = this.refreshWidgets.bind(this);
	}

	componentDidMount() {
		this.props.store.addChangeListener(this.refreshWidgets);
	}

	componentWillUnmount() {
		this.props.store.removeChangeListener(this.refreshWidgets);
	}

	refreshWidgets() {
		this.setState({
			widgets: this.props.store.getWidgets()
		});
	}

	render() {

		return <table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Color</th>
				</tr>
			</thead>
			<tbody>
				{this.state.widgets.map(widget => <tr key={widget.id}>
					<td>{widget.name}</td>
					<td>{widget.color}</td>
				</tr>)}
			</tbody>
		</table>;

	}


}