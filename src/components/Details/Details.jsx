import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Typography, CardContent } from '@mui/material';


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
        <div id="details">   
            {book && 
           
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                    <a href={`${book.link}`} target="_blank" id="bookLink">  {/*navigates to wiki link about book*/}
                    <Typography gutterBottom variant="h5" component="div">
                        {book.title}
                    </Typography>
                    </a>
                    <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => booksByAuthor(book.author)} >  {/*back to books by the author*/}
                        {book.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.language}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.year}
                    </Typography>
                    </CardContent>
                </Card>}
        </div>
    )
};

export default Details;