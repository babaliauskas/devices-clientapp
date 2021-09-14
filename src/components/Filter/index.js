import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { setFilterAction } from '../../actions';
import { filterTypesList } from '../../constants';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 300,
	},
}));

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: 150,
			width: 170,
		},
	},
};

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const Filter = () => {
	const classes = useStyles();
	const theme = useTheme();

	const dispatch = useDispatch();
	const [value, setValue] = useState([]);

	const handleChange = (event) => {
		const { value } = event.target;
		setValue(value);
		dispatch(setFilterAction({ value }));
	};

	return (
		<Grid item>
			<FormControl className={classes.formControl}>
				<InputLabel id='filter-list-label'>Filter Devices</InputLabel>
				<Select
					labelId='filter-list-label'
					id='filter-list'
					multiple
					value={value}
					onChange={handleChange}
					input={<Input />}
					MenuProps={MenuProps}
				>
					{filterTypesList.map((name) => (
						<MenuItem
							key={name}
							value={name}
							style={getStyles(name, value, theme)}
						>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Grid>
	);
};

export default Filter;
