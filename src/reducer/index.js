import { createSlice } from '@reduxjs/toolkit';

export const devicesSlice = createSlice({
	name: 'devices',
	initialState: {
		devices: [],
		device: {},
		sortBy: 'system_name',
	},
	reducers: {
		setDevices: (state, action) => {
			state.devices = [...action.payload];
		},
		setDevice: (state, action) => {
			state.device = action.payload;
		},
		sortDevices: (state, action) => {
			state.devices = action.payload;
		},
		setSort: (state, action) => {
			state.sortBy = action.payload;
		},
	},
});

export const { setDevices, setDevice, sortDevices, setSort } =
	devicesSlice.actions;
export default devicesSlice.reducer;
