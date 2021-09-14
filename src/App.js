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
import { filteredAndSorted } from './utils';

const useStyles = makeStyles(() => ({
	container: {
		backgroundColor: 'white',
		width: '600px',
		minHeight: '100vh',
		height: '100%',
		margin: 'auto',
		padding: '20px 20px',
	},
}));

const App = () => {
	const classes = useStyles();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const { devices, filters, sortBy } = useSelector((state) => state.devices);
	const dispatch = useDispatch();

	useEffect(() => {
		const bla = async () => {
			const response = await dispatch(fetchDevices());
			if (!response) setError(true);
			setLoading(false);
		};
		bla();
	}, [dispatch]);

	if (loading) return <Loading />;
	else if (error) return <Error />;

	return (
		<Grid className={classes.container}>
			<Grid container justifyContent='center' alignItems='center'>
				<Filter />
				<Sort />
				<AddSystem />
			</Grid>
			{!devices.length && <NoDevices />}

			<Container className={classes.content}>
				{filteredAndSorted({
					data: devices,
					sortValue: sortBy,
					filterValues: filters,
				}).map((device) => (
					<Device key={device.id} device={device} />
				))}
			</Container>
		</Grid>
	);
};

export default App;
