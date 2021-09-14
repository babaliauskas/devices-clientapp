import React from 'react';
import {
	FormControl,
	Grid,
	MenuItem,
	Select,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { typeList } from '../../../constants';

const useStyles = makeStyles(() => ({
	text: {
		fontSize: 12,
	},
}));

const SelectForm = ({ func, value }) => {
	const classes = useStyles();

	const handleChange = (e) => {
		func(e.target.value);
	};
	return (
		<Grid container alignItems='center' className={classes.container}>
			<Grid item xs={5}>
				<Typography className={classes.text}>
					Type
					<sup> *</sup>
				</Typography>
			</Grid>
			<Grid item xs={7}>
				<FormControl
					fullWidth
					variant='outlined'
					size='small'
					className={classes.formControl}
				>
					<Select value={value} onChange={handleChange}>
						{typeList.map((item) => (
							<MenuItem
								key={item.name}
								value={item.value}
								disabled={item.disabled}
							>
								{item.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	);
};

export default SelectForm;
