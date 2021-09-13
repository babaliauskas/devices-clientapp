import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		width: '100%',
		marginTop: '50px',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingBottom: '20px',
	},
	container: {
		width: '50%',
		borderBottom: '1px solid red',
		padding: '10px',
	},
	msg: {
		color: 'red',
	},
}));

const Error = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.root}>
			<Grid className={classes.container}>
				<Typography className={classes.msg} gutterBottom align='center'>
					Something Went Wrong. Please refresh and try again!
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Error;
