import { actions } from '../actions';
import { dispatcher } from '../dispatcher';

const widgets = [
	{ id: 1, name: 'Widget 1', color: 'blue '}
];

export const refreshWidgets = () => {

	var action = {
		type: actions.REFRESH_WIDGETS,
		widgets: widgets
	};

	dispatcher.dispatch(action);

};