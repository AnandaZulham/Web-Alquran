import {AppBar, Toolbar, Typography} from '@material-ui/core';

function Navbar() {
	return (
		<AppBar color='secondary' style={{boxShadow:'none'}}>
		<Toolbar>
		  <Typography variant="h6" color='textPrimary'>App Qur'an Online</Typography>
		</Toolbar>
		</AppBar>
	)
}

export default Navbar;
