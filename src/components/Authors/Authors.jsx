import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
// mui
import { Card, Typography, Grid } from '@mui/material';

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
            fullWidth
            sx={{mx: '10%'}}>
            {authors && authors.map((author, i) => 
            <Grid key={i} item xs={3}>
                <Card sx={{ padding: 2 }} onClick={() => booksByAuthor(author)}>
                    <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: '600' }}>
                    {author}
                    </Typography>
                </Card>
            </Grid>
            )}
        </Grid>
    )
};

export default Authors;