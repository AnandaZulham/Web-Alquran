import {useState, useEffect} from 'react';
import {Grid, Box, Card, CardContent, Typography} from '@material-ui/core';
import axios from 'axios';

function AyatComponent(props) {
	const [data, setData] = useState ([])
	useEffect (() => {
		axios.get(`https://api.npoint.io/99c279bb173a6e28359c/surat/${props.match.params.id}`)
		.then(res => {
			setData(res.data)

		})
	}, [props.match.params.id])
	return (
		<Grid container style={{marginTop:'5em'}}>
			{data.map((item, index) => (
				 <Grid item xs={12}>
				 <Box mt={4} height='25%'>
				  <Card variant='outlined'>
				   <CardContent>
				   	<Typography variant='body1' align='right'>{item.ar}</Typography>
					<Typography variant='body2' style={{marginTop:'15px'}}>{item.id}</Typography>
				   </CardContent>
				  </Card>
				 </Box>
				 </Grid>
			))}
		</Grid>
	)
}

export default AyatComponent;