import axios from 'axios';
import { setDevices, setDevice, setSort } from '../reducer';
import { urls } from '../client/requests';
import { sort } from '../utils';

export const fetchDevices = () => async (dispatch, getState) => {
	const { sortBy } = getState().devices;
	try {
		const response = await axios.get(urls.devices());
		const sortedList = sort({ data: response.data, value: sortBy });
		dispatch(setDevices(sortedList));
		return sortedList;
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
			await axios.post(urls.devices(), device);
			dispatch(fetchDevices());
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	};

export const deleteDevice =
	({ id }) =>
	async (dispatch) => {
		try {
			await axios.delete(urls.devicesId({ id }));
			dispatch(fetchDevices());
			return true;
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
