import React from "react";
import { Typography } from '@material-ui/core';

function Authors() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Typography>
				Mayumi Tamura, Cristian Andres Cobo, Laura Hincapie
			</Typography>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default Authors;
