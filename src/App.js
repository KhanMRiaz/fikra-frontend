import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Chapters from './pages/chapters'
import Verses from './pages/verses'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/chapters' element={<Chapters/>}/>
        <Route exact path='/chapters/verses' element={<Verses/>}/>
        <Route path='*' element={<Navigate to={'/chapters'}/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
