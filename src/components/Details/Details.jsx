import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Typography, CardContent, CardMedia, Grid, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


function Details () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { bookId } = useParams();
    const books = useSelector(store => store.books);
    const book = books.find(title => title.id === Number(bookId));
    console.log(book);

    const booksByAuthor = (author) => {
        const collection = books.filter(book => book.author === author);
        console.log(collection);
        dispatch({ type: 'SET_RESULTS', payload: collection});
        navigate('/books');
      };

    return (
        <Grid container 
              sx={{ justifyContent: 'center', padding: 5 }}>   
            {book && 
           
                <Card sx={{ width: {xs: '80vw', md: '60vw'}, 
                            justifySelf: 'center'}}>
                    <CardMedia
                            component="img"
                            image="https://i0.wp.com/www.ravenoak.net/wp-content/uploads/2015/01/dune.jpg?resize=447%2C714&ssl=1" //would be image if link in data worked
                            title="green iguana"/>
                    <CardContent sx={{ fontAlign: 'center',
                                       '&:hover': { backgroundColor: '#ddd5c4' } }}>
                        <a href={`${book.link}`} target="_blank" id="bookLink">  {/*navigates to wiki link about book*/}
                        <Typography 
                            gutterBottom 
                            variant="h1" 
                            component="div" 
                            sx={{ fontSize: { xs: '1rem', md: '1.3rem' }, 
                                  '&:hover': { color: 'grey' },
                                  display: 'flex',
                                  justifyContent: 'space-between' }}>
                            {book.title}
                        <OpenInNewIcon sx={{ ml: 1, verticalAlign: '5px', fontSize: '1.5rem', color: 'grey'}}/>
                        </Typography>
                        </a>
                        <Typography 
                            variant="body1" 
                            color="text.secondary" 
                            sx={{ 
                                cursor: 'pointer', 
                                fontStyle: 'italic',
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                '&:hover': { color: 'grey' } }} 
                            onClick={() => booksByAuthor(book.author)}>  {/*back to books by the author*/}
                            {book.author}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ fontSize: { xs: '0.7rem', md: '0.9rem' }} }>
                            {book.language} - {book.year}
                        </Typography>
                    </CardContent>
                </Card>}
        </Grid>
    )
};

export default Details;