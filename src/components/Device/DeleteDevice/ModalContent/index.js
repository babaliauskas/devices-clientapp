import React, { useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { deleteDevice } from '../../../../actions';

const useStyles = makeStyles(() => ({
	modal: {
		width: '400px',
		height: '150px',
		margin: '30px auto',
		background: 'white',
		padding: '20px 10px',
	},
}));

const ModalContent = ({ setOpen, id }) => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const classes = useStyles();

	const handleDelete = async () => {
		setLoading(true);

		const status = await dispatch(deleteDevice({ id }));
		if (status) alert('Successfully deleted!');
		else alert('Something went wrong. Please try again');

		setOpen(false);
		setLoading(false);
	};

	return (
		<Grid
			container
			direction='column'
			justifyContent='space-around'
			alignItems='center'
			className={classes.modal}
		>
			<Grid item>
				<Typography variant='h6'>Are you sure?</Typography>
			</Grid>
			<Grid item>
				<Button
					style={{ marginRight: 20 }}
					variant='contained'
					color='secondary'
					size='small'
					onClick={handleDelete}
					disabled={loading}
				>
					{loading ? 'Loading' : 'Delete'}
				</Button>
				<Button variant='contained' size='small' onClick={() => setOpen(false)}>
					Cancel
				</Button>
			</Grid>
		</Grid>
	);
};

export default ModalContent;
