import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	title: {
		fontSize: 12,
	},
}));
const DeviceDetails = ({ name, value }) => {
	const classes = useStyles();
	return (
		<Grid item>
			<Typography className={classes.title}>
				{name}: {value}
			</Typography>
		</Grid>
	);
};
export default DeviceDetails;
