import React, { useState } from 'react';
import { Button, Grid, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ModalBody from './ModalBody';

const useStyles = makeStyles(() => ({
	button: {
		marginLeft: 10,
		fontSize: 10,
	},
}));

const AddSystem = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	return (
		<Grid>
			<Button
				className={classes.button}
				variant='contained'
				color='primary'
				size='small'
				onClick={() => setOpen(true)}
			>
				Add Device
			</Button>
			<Modal open={open} onClose={() => setOpen(false)}>
				<>
					<ModalBody setOpen={setOpen} />
				</>
			</Modal>
		</Grid>
	);
};

export default AddSystem;
