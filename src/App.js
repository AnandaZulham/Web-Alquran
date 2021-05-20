import Navbar from './components/Navbar';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import ContentHome from './components/ContentHome';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AyatComponent from './components/AyatComponent';

const theme = createMuiTheme({
	palette : {
		secondary : {
			main : '#4caf50'
		}
	}
})

function App() {
  return (
    <ThemeProvider theme={theme}>
		<Navbar />
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={ContentHome} />
				<Route path='/ayat/:id' component={AyatComponent} />
			</Switch>
		</BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
