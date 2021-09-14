import axios from 'axios';
import {
	setDevices,
	setDevice,
	setSort,
	addNewDevice,
	updatedDevices,
	setFilter,
} from '../reducer';
import { urls } from '../client/requests';

export const fetchDevices = () => async (dispatch) => {
	try {
		const response = await axios.get(urls.devices());
		dispatch(setDevices(response.data));
		return response.data;
	} catch (err) {
		console.error(err);
		return false;
	}
};

export const fetchDevice =
	({ id }) =>
	async (dispatch) => {
		try {
			const response = await axios.get(urls.devicesId({ id }));
			dispatch(setDevice(response.data));
			return response.data;
		} catch (err) {
			console.error(err);
			return false;
		}
	};

export const updateDevice =
	({ device, id }) =>
	async (dispatch) => {
		try {
			await axios.put(urls.devicesId({ id }), device);
			dispatch(fetchDevices());
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	};

export const addDevice =
	({ device }) =>
	async (dispatch) => {
		try {
			const response = await axios.post(urls.devices(), device);

			dispatch(addNewDevice(response.data));
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	};

export const setFilterAction =
	({ value }) =>
	(dispatch) => {
		dispatch(setFilter(value));
	};

export const deleteDevice =
	({ id }) =>
	async (dispatch, getState) => {
		const { devices } = getState().devices;
		try {
			const response = await axios.delete(urls.devicesId({ id }));
			if (response.data === 1) {
				const filteredDevices = devices.filter((device) => device.id !== id);
				dispatch(updatedDevices(filteredDevices));
				return true;
			}
			return false;
		} catch (err) {
			console.error(err);
			return false;
		}
	};

export const setSortDevices =
	({ value }) =>
	(dispatch) => {
		dispatch(setSort(value));
	};
