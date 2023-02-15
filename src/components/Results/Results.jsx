import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

// mui
import { Card, Typography, Grid, CardMedia, CardContent} from '@mui/material';

function Results(){
    const navigate = useNavigate();
    const results = useSelector(store => store.results);
    
    return(
        <Grid container 
        id="titles"
        gap={2} 
        columns={{ xs: 4, sm: 8, md: 12, l: 12}}
        justifyContent='center'
        sx={{padding: '5%'}}>
        {results && results.map((book, i) => 
            <Grid key={book.id} item xs={3}>
                <Card sx={{ cursor: 'pointer' }} onClick={() => navigate(`${book.id}`)}> {/*navigates to details*/}
                    <CardMedia
                            sx={{ height: 140 }}
                            image="https://i0.wp.com/www.ravenoak.net/wp-content/uploads/2015/01/dune.jpg?resize=447%2C714&ssl=1" //would be image if link in data worked
                            title="green iguana"
                        />
                    <CardContent sx={{ padding: 1 }}>
                        <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: '100' }}>
                        {book.title}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            )}
        </Grid>
    )
};

export default Results;