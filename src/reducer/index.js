import { createSlice } from '@reduxjs/toolkit';

export const devicesSlice = createSlice({
	name: 'devices',
	initialState: {
		devices: [],
		device: {},
		sortBy: 'system_name',
		filters: [],
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
		addNewDevice: (state, action) => {
			state.devices = [...state.devices, action.payload];
		},
		updatedDevices: (state, action) => {
			state.devices = action.payload;
		},
		setFilter: (state, action) => {
			state.filters = [...action.payload];
		},
	},
});

export const {
	setDevices,
	setDevice,
	sortDevices,
	setSort,
	updatedDevices,
	addNewDevice,
	setFilter,
} = devicesSlice.actions;
export default devicesSlice.reducer;
