import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import MovieDetail from './SingleMovie'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/:id' element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
