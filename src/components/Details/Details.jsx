import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Typography, CardContent } from '@mui/material';


function Details () {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const book = useSelector(store => store.books).find(title => title.id === Number(bookId));
    console.log(book);

    return (
        <div id="details">   
            {book && 
            <a href={`${book.link}`} target="_blank" id="bookLink" style={{textDecoration: 'none'}}> 
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.language}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.year}
                    </Typography>
                    </CardContent>
                </Card>
            </a>}
        </div>
    )
};

export default Details;