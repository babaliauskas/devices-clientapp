import React, { useState } from 'react';
import { Grid, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import ModalContent from './ModalContent';

const useStyles = makeStyles(() => ({
	icon: {
		'&:hover': {
			color: 'red',
			cursor: 'pointer',
		},
	},
}));

const DeleteDevice = ({ id }) => {
	const [open, setOpen] = useState(false);

	const classes = useStyles();

	return (
		<Grid>
			<DeleteForeverIcon
				fontSize='small'
				onClick={() => setOpen(true)}
				className={classes.icon}
			/>
			<Modal open={open} onClose={() => setOpen(false)}>
				<>
					<ModalContent setOpen={setOpen} id={id} />
				</>
			</Modal>
		</Grid>
	);
};

export default DeleteDevice;
