import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
//components
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
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
        <Header></Header>
        <Search></Search>
        <Results></Results>
      </ThemeProvider>
    </div>
  );
}

export default App;
