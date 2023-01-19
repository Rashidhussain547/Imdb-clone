import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './Components/MovieList/Movielist';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        {/* <Route  path='movie/:id' element={<h1>Movie details</h1>}></Route> */}
        <Route  path='movies/:type' element={<MovieList/>}></Route>
        <Route  path='/*' element={<h1>ERROR !! Movies details not available at this moment</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
