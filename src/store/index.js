import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import devicesReducer from '../reducer';

export default configureStore({
	reducer: {
		devices: devicesReducer,
	},
	middleware: [thunk],
});
