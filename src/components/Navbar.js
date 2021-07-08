import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {useContext} from 'react';
import {ThemeContext} from'../App'
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles ({
	root : {
	  position: "absolute",
	  right: 15
	}
})
function Navbar() {
	const classes = styles()
	const {themeMode, setThemeMode} = useContext(ThemeContext)
	const textTheme = themeMode ? "Dark Mode" : "Light Mode"
	return (
		<AppBar color='secondary' style={{boxShadow:'none'}}>
		<Toolbar>
		  <Typography variant="h6" color='textPrimary'>App Qur'an Online</Typography>
		<Button variant="outlined" size ="small" onClick={() => setThemeMode(!themeMode)} className={classes.root}>{textTheme}</Button>
		</Toolbar>
		</AppBar>
	)
}

export default Navbar;
