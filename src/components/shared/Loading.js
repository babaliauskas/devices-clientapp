import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		width: '100%',
		marginTop: '50px',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

const Loading = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CircularProgress />
		</div>
	);
};

export default Loading;
