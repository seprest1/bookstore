import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
// mui
import { Card, Typography, Grid, CardMedia, CardContent} from '@mui/material';

function Authors () {
  const books = useSelector (store => store.books);
  const authors = books.map(book => book.author).filter((author, index, array) => array.indexOf(author) === index);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const booksByAuthor = (author) => {
    const collection = books.filter(book => book.author === author);
    console.log(collection);
    dispatch({ type: 'SET_RESULTS', payload: collection});
    navigate('/books');
  };

    return (
        <Grid container id="authors"
            gap={2} 
            columns={{ xs: 4, sm: 8, md: 12, l: 12}}
            justifyContent='center'
            sx={{padding: '2%'}}>
            {authors && authors.map((author, i) => 
            <Grid key={i} item xs={3}>
                <Card onClick={() => booksByAuthor(author)}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://momentmag.com/wp-content/uploads/2019/06/Piercy.jpg" //would be image link if contained in data
                        title="green iguana"
                    />
                    <CardContent sx={{ padding: 1 }}>
                        <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: '100'}}>
                        {author}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            )}
        </Grid>
    )
};

export default Authors;