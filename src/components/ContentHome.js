import {useState, useEffect} from 'react';
import axios from 'axios'
import {Box, Grid, Card, CardContent, Typography, Link} from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom';

function ContentHome() {
	const [data, setData] = useState ([])

	useEffect(() => {
		axios.get ('https://api.npoint.io/99c279bb173a6e28359c/data')
		.then(res => {
			setData(res.data)
		})
	}, [])
	
	return (
		<Grid container spacing={4} style={{marginTop:'5em'}}>
		{data.map((item, index) => (
			 <Grid item style={{marginTop:'12px'}} xs={12} sm={2} md={3}>
				<Box height='25%'>
			 	 <Card variant='outlined'>
			 	  <CardContent>
			 		<Typography variant='body1'>Surat {item.nama}</Typography>
			 		<Typography variant='body2' color='textSecondary' style={{marginBottom:'15px'}}>{item.asma}</Typography>
					<Link to={`/ayat/${item.nomor}`} color='secondary' component={RouterLink}>Baca</Link>
			 	  </CardContent>
			 	 </Card>
			 	</Box>
			 </Grid>
		))}
		</Grid>
	)
}

export default 	ContentHome;