import {useState} from 'react'
import Navbar from './components/Navbar';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core'
import ContentHome from './components/ContentHome';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AyatComponent from './components/AyatComponent';
import {createContext} from 'react';

export const ThemeContext = createContext(true)

function App() {
  const [themeMode, setThemeMode] = useState(true)
  const theme = createMuiTheme({
	  palette : {
		secondary : {
			main : '#4caf50'
		}, 
	  type : themeMode ? 'light' : 'dark'
	}
  })


  return (
    <ThemeProvider theme={theme}>
	  <Paper style={{height: "100%"}} elevation={0}>
	  <ThemeContext.Provider value={{themeMode, setThemeMode}}>
		<Navbar />
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={ContentHome} />
				<Route path='/ayat/:id' component={AyatComponent} />
			</Switch>
		</BrowserRouter>
	  </ThemeContext.Provider>
	  </Paper>
    </ThemeProvider>
  );
}

export default App;
