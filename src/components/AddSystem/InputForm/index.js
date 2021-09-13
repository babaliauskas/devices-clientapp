import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';

const useStyles = makeStyles(() => ({
	container: {
		margin: '10px 0',
	},
	text: {
		fontSize: 12,
	},
}));

const InputForm = ({ func, title, type, value }) => {
	const classes = useStyles();

	return (
		<Grid container alignItems='center' className={classes.container}>
			<Grid item md={5}>
				<Typography className={classes.text}>
					{title}
					<sup> *</sup>
				</Typography>
			</Grid>
			<Grid item md={7}>
				<TextField
					type={type === 'int' ? 'number' : 'text'}
					variant='outlined'
					size='small'
					value={value}
					fullWidth
					required
					onChange={(e) => func(e.target.value)}
				/>
			</Grid>
		</Grid>
	);
};

export default InputForm;
