import { useDispatch, useSelector } from 'react-redux';

function Results () {
  const books = useSelector (store => store.books);
  const authors = books.map(book => book.author).filter((author, index, array) => array.indexOf(author) === index);
  
    return (
        <div id="results">
            {authors && authors.map((author, i) => <h2 key={i}> {author} </h2>)}
        </div>
    )
};

export default Results;