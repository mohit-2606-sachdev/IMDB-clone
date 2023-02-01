import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MoviList from './components/MovieList/MoviList';
import MovieDetail from './pages/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='movie/:id' element={<MovieDetail/>}/>
          <Route path='movies/:type' element={<MoviList/>}/>
          <Route path='/*' element={<h1>Error Page</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
