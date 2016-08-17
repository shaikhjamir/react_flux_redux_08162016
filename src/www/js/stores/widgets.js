import { actions } from '../actions';
import { dispatcher } from '../dispatcher';

class WidgetStore {

}

export const widgetStore = new WidgetStore();

dispatcher.register(function(action) {

	switch(action.type) {
		case actions.REFRESH_WIDGETS:
			break;
	}

});