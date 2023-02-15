import { useDispatch, useSelector } from 'react-redux';
// mui
import { Card, Typography, Grid } from '@mui/material';

function Results(){
    const results = useSelector (store => store.results);
    
    return(
        <Grid container id="titles"
        gap={2} 
        columns={{ xs: 4, sm: 8, md: 12, l: 12}}
        fullWidth
        sx={{mx: '10%'}}>
        {results && results.map((book, i) => 
        <Grid key={i} item xs={3}>
            <Card sx={{ padding: 2 }}>
                <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: '600' }}>
                {book.title}
                </Typography>
            </Card>
        </Grid>
        )}
    </Grid>
    )
};

export default Results;