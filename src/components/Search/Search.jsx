import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/// mui
import { Grid, TextField, InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';

function Search () {

    const [search, setSearch] = useState('');
    const books = useSelector (store => store.books);
    const getResults = () => {
        const searchTerms = search.toLowerCase().split(' ').filter(term => term.trim() !== ''); //splits search terms into individual words
        console.log(searchTerms);

        const results = [];
        searchTerms.forEach(term => 
            books.filter(book => 
                (book.title.toLowerCase().includes(term) || //searches through book titles
                book.author.toLowerCase().includes(term) || //searches through book authors
                books.year === Number(term)) //searches through publication year
                && results.push(book)));
        setSearch('');
        console.log(results);
    };

    const [filter, setFilter] = useState('');
    const results = useSelector (store => store.books);
    const filterResults = () => {
    }
    
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
                    onChange={(e) => setSearch(e.target.value)}>
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
                        onChange={(e) => setFilter(e.target.value)}
                        size="small"
                        >
                            <MenuItem value={'English'}>English</MenuItem>
                            <MenuItem value={'Italian'}>Italian</MenuItem>
                            <MenuItem value={'French'}>French</MenuItem>
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