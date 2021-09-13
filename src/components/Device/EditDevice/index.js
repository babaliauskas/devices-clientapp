import React, { useState } from 'react';
import { Grid, Modal } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import ModalBody from '../../AddSystem/ModalBody';

const useStyles = makeStyles(() => ({
	icon: {
		'&:hover': {
			color: 'green',
			cursor: 'pointer',
		},
	},
}));

const EditDevice = ({ id }) => {
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	return (
		<Grid item>
			<EditIcon
				fontSize='small'
				className={classes.icon}
				onClick={() => setOpen(true)}
			/>
			<Modal open={open} onClose={() => setOpen(false)}>
				<>
					<ModalBody id={id} setOpen={setOpen} />
				</>
			</Modal>
		</Grid>
	);
};

export default EditDevice;
