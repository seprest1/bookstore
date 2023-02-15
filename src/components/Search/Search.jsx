import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

/// mui
import { Grid, TextField, InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';

function Search () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const books = useSelector (store => store.books);

    //searches through json data for authors/titles/years matching
    const getResults = () => {
        setSearch(''); //clear input

        const searchTerms = search.toLowerCase().split(' ').filter(term => term.trim() !== ''); //splits search terms into individual words

        const matches = [];
        searchTerms.forEach(term => 
            books.filter(book => 
                (book.title.toLowerCase().includes(term) || //searches through book titles
                book.author.toLowerCase().includes(term) || //searches through book authors
                books.year === Number(term)) //searches through publication year
                && matches.push(book)));

        filterResults(matches, filter); //filters if language selected
    };

    //allows user to press 'enter' to activate search
    const handleKeyPress = e => {
        if (e.key === "Enter") {
          getResults();
        }
    };

    //filters json data for specific language without searching
    const [filter, setFilter] = useState('');
    const changeFilter = (e) => {
        console.log('language is:', e.target.value);
        setFilter(e.target.value);
        filterResults(books, e.target.value);
    };

    const filterResults = (arrayToFilter, language) => {
        console.log('filter is:', language);
        const results = arrayToFilter.filter(book => book.language.toLowerCase().includes(language) && book);
        console.log('results are:', results);
        dispatch({ type: 'SET_RESULTS', payload: results}); //sends results to redux store
        navigate('/books'); //goes to result page
    };

    const languages = ['English', 'Italian', 'French', 'Spanish', 'German', 'Portuguese', 'Russian', 'Greek', 'Norwegian', 'Japanese', 'Sanskrit', 'Icelandic', 'Chinese', 'Swedish', 'Persian', 'Arabic', 'Latin'];

    return (
        <Grid container id="search" spacing={2} sx={{display: 'flex', flexDirection: 'row', margin: '10% 0 0 0', gap: '2%', justifyContent: 'center'}}>
            <Grid item xs={5}>
                <TextField 
                    fullWidth
                    label="Search..." 
                    variant="outlined" 
                    size="small"
                    color="secondary"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    >
                </TextField>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                    <InputLabel sx={{pb: 2}}>Filter</InputLabel>
                        <Select
                        id="select"
                        value={filter}
                        label="English"
                        color="secondary"
                        onChange={changeFilter}
                        size="small"
                        >                  //creates select options from language array
                            {languages.map(language =>  <MenuItem value={language.toLowerCase()}>{language}</MenuItem>)}
                        </Select>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" 
                        color="secondary" 
                        onClick={getResults}
                    >
                            Search
                </Button>
            </Grid>
        </Grid>
    )
};

export default Search;