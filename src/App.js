import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
//components
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Results from './components/Results/Results';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_BOOKS' });
  }, []);
 
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Results></Results>
    </div>
  );
}

export default App;
