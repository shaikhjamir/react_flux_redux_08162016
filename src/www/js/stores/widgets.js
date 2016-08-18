import { actions } from '../actions';
import { dispatcher } from '../dispatcher';
import { EventEmitter } from 'events';

const EVENT_CHANGE = 'change';

let widgets = [];

class WidgetStore extends EventEmitter {

	emitChange() {
		this.emit(EVENT_CHANGE);
	}

	addChangeListener(cb) {
		this.on(EVENT_CHANGE, cb);
	}

	removeChangeListener(cb) {
		this.removeListener(EVENT_CHANGE, cb);
	}

	getWidgets() {
		return widgets;
	}

}

export const widgetStore = new WidgetStore();

dispatcher.register(function(action) {

	switch(action.type) {
		case actions.REFRESH_WIDGETS:
			widgets = action.widgets;
			widgetStore.emitChange();
			break;
	}

});