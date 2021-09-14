import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { setSortDevices } from '../../actions';
import { sortByList } from '../../constants';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const Sort = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const initialSortVal = useSelector((state) => state.devices.sortBy);
	const [sort, setSort] = useState(initialSortVal);

	const handleChange = (event) => {
		const { value } = event.target;
		setSort(value);
		dispatch(setSortDevices({ value }));
	};

	return (
		<Grid item style={{ margin: 0 }}>
			<FormControl className={classes.formControl}>
				<InputLabel id='sort-devices-label'>Sort Devices</InputLabel>
				<Select
					labelId='sort_devices-label'
					id='sort-devices'
					value={sort}
					onChange={handleChange}
				>
					{sortByList.map((item) => (
						<MenuItem key={item.name} value={item.value}>
							{item.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Grid>
	);
};

export default Sort;
