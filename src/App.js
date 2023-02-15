import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
//components
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Authors from './components/Authors/Authors';
import Results from './components/Results/Results';
import Details from './components/Details/Details';
//mui
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_BOOKS' });
  }, []);


  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#98872e',
      },
      secondary: {
        main: '#f44336',
      },
      error: {
        main: '#d00d59',
      },
      background: {
        default: '#eceae5',
        paper: '#e4dccc',
      },
    },
  });


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router> 
        <Header></Header>
        <Search></Search>
          <Routes>
            <Route exact path="/" element={<Authors/>} />
            <Route exact path="/books" element={<Results/>} />
            <Route exact path="/books/:bookId" element={<Details/>} />
          </Routes>
        </Router> 
      </ThemeProvider>
    </div>
  );
}

export default App;
