import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputForm from '../InputForm';
import SelectForm from '../SelectForm';

import { addDevice, fetchDevice, updateDevice } from '../../../actions';
import Error from '../../shared/Error';

const useStyles = makeStyles(() => ({
	root: {
		width: 500,
		margin: 'auto',
	},
	container: {
		marginTop: '30px',
		textAlign: 'center',
	},
	header: {
		borderBottom: '1px solid grey',
	},
	text: {
		fontSize: 10,
	},
	button: {
		marginRight: '10px',
	},
	action: {
		padding: 16,
	},
	error: {
		color: 'red',
		marginTop: '20px',
	},
}));

const ModalBody = ({ setOpen, id }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [capacity, setCapacity] = useState('');
	const [type, setType] = useState('Select_Type');
	const [error, setError] = useState(false);
	const [postError, setPostError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			const response = await dispatch(fetchDevice({ id }));
			if (response) {
				const { system_name, type, hdd_capacity } = response;
				setName(system_name);
				setType(type);
				setCapacity(hdd_capacity);
			}
		};
		if (id) getData();
	}, [id, dispatch]);

	const handleSubmit = async () => {
		if (name === '' || capacity === '' || type === 'Select_type')
			return setError(true);

		setLoading(true);
		const device = {
			type,
			system_name: name,
			hdd_capacity: capacity,
		};

		const status = id
			? await dispatch(updateDevice({ id, device }))
			: await dispatch(addDevice({ device }));

		if (status) {
			setLoading(false);
			setOpen(false);
		} else {
			setLoading(false);
			setPostError(true);
		}
	};

	if (postError)
		return (
			<Card className={classes.container}>
				<Error />
			</Card>
		);

	return (
		<Grid className={classes.root}>
			<Card className={classes.container}>
				<CardHeader
					className={classes.header}
					subheader={id ? 'Edit Device' : 'Add Device'}
				/>
				<CardContent>
					<InputForm value={name} func={setName} title='System Name' />
					<SelectForm func={setType} value={type} />
					<InputForm
						func={setCapacity}
						value={capacity}
						title='HDD Capacity (GB)'
						type='int'
					/>
					{error && (
						<Grid item>
							<small className={classes.error}>
								Submit all required fields
							</small>
						</Grid>
					)}
				</CardContent>
				<CardActions className={classes.action}>
					<Grid container justifyContent='flex-end'>
						<Grid item>
							<Button
								className={classes.button}
								size='small'
								variant='contained'
								color='primary'
								onClick={handleSubmit}
								disabled={loading}
							>
								{loading ? 'Loading...' : 'Submit'}
							</Button>
						</Grid>
						<Grid item>
							<Button
								size='small'
								variant='outlined'
								onClick={() => setOpen(false)}
							>
								Cancel
							</Button>
						</Grid>
					</Grid>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ModalBody;
