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
      mode: 'light',
      primary: {
        main: '#b77d57',
      },
      secondary: {
        main: '#f54500',
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
            <Route exact path="/results" element={<Results/>} />
            <Route exact path="/details/:id" element={<Details/>} />
          </Routes>
        </Router> 
      </ThemeProvider>
    </div>
  );
}

export default App;
