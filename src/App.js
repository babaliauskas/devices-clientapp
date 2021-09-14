import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { fetchDevices } from './actions';
import Loading from './components/shared/Loading';
import Error from './components/shared/Error';
import Filter from './components/Filter';
import NoDevices from './components/shared/NoDevices';
import Sort from './components/Sort';
import AddSystem from './components/AddSystem';
import Device from './components/Device';

const useStyles = makeStyles(() => ({
	container: {
		backgroundColor: 'white',
		width: '600px',
		height: '100vh',
		margin: 'auto',
		padding: '20px 20px',
	},
}));

const App = () => {
	const classes = useStyles();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [devices, setDevices] = useState([]);

	const stateDevices = useSelector((state) => state.devices.devices);
	const dispatch = useDispatch();

	useEffect(() => {
		const bla = async () => {
			const response = await dispatch(fetchDevices());
			if (response) setDevices(response);
			else setError(true);
			setLoading(false);
		};
		if (!stateDevices.length) bla();
		else setDevices(stateDevices);
	}, [dispatch, stateDevices]);

	if (loading) return <Loading />;
	else if (error) return <Error />;

	return (
		<Grid className={classes.container}>
			<Grid container justifyContent='center' alignItems='center'>
				<Filter setDevices={setDevices} />
				<Sort devices={devices} setDevices={setDevices} />
				<AddSystem />
			</Grid>
			{!devices.length && <NoDevices />}

			<Container className={classes.content}>
				{devices.map((device) => (
					<Device key={device.id} device={device} />
				))}
			</Container>
		</Grid>
	);
};

export default App;
