import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

// mui
import { Card, Typography, Grid } from '@mui/material';

function Results(){
    const navigate = useNavigate();
    const results = useSelector(store => store.results);
    
    return(
        <Grid container id="titles"
        gap={2} 
        columns={{ xs: 4, sm: 8, md: 12, l: 12}}
        fullWidth
        sx={{mx: '10%'}}>
        {results && results.map((book, i) => 
            <Grid key={book.id} item xs={3}>
                <Card sx={{ padding: 2, cursor: 'pointer' }} onClick={() => navigate(`${book.id}`)}> {/*navigates to details*/}
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