import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DeviceDetails from './DeviceDetails';
import EditDevice from './EditDevice';
import DeleteDevice from './DeleteDevice';

const useStyles = makeStyles(() => ({
	root: {
		margin: 'auto',
	},
	container: {
		width: 400,
		border: '1px solid red',
		padding: 10,
		margin: '5px auto',
	},
}));

const Device = ({ device }) => {
	const classes = useStyles();
	return (
		<Grid
			container
			className={classes.container}
			justifyContent='space-between'
		>
			<Grid item xs={10}>
				<DeviceDetails name='System Name' value={device.system_name} />
				<DeviceDetails name='Type' value={device.type} />
				<DeviceDetails name='HDD Capacity' value={device.hdd_capacity} />
			</Grid>
			<Grid item xs={2}>
				<Grid
					container
					justifyContent='space-around'
					alignItems='center'
					direction='column'
				>
					<EditDevice id={device.id} />
					<DeleteDevice id={device.id} />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Device;
