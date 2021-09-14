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

	const handleChange = (e) => {
		if (e === '') func(e);
		else if (type === 'int') {
			const pattern = new RegExp('^[1-9]\\d*$');
			const result = pattern.test(e);
			if (result) func(e);
		} else func(e);
	};

	return (
		<Grid container alignItems='center' className={classes.container}>
			<Grid item xs={5}>
				<Typography className={classes.text}>
					{title}
					<sup> *</sup>
				</Typography>
			</Grid>
			<Grid item xs={7}>
				<TextField
					variant='outlined'
					size='small'
					value={value}
					fullWidth
					required
					onChange={(e) => handleChange(e.target.value)}
				/>
			</Grid>
		</Grid>
	);
};

export default InputForm;
