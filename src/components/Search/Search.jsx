import './Search.css'
import { useState } from 'react';
/// mui
import { Grid, TextField, InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';

function Search () {

    const searchFunction = () => {

    };

    const [filter, setFilter] = useState('');

    const handleChange = (e) => {
      setFilter(e.target.value);
    };
    
    return (
        <Grid container id="search" spacing={2} sx={{display: 'flex', flexDirection: 'row', margin: '10% 0 0 0', gap: '2%', justifyContent: 'center'}}>
            <Grid item xs={5}>
                <TextField 
                    fullWidth
                    label="Search..." 
                    variant="outlined" 
                    size="small"
                    color="secondary">
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
                        onChange={handleChange}
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
                        onClick={searchFunction}>
                            Search
                </Button>
            </Grid>
        </Grid>
    )
};

export default Search;