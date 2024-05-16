import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Head } from './components/header/header';
import { Main } from './pages/main/main';
import { Info } from './pages/information/info';
import { Important } from './pages/important/important';
import { Champion } from './pages/champion/champion';


function App() {
  return (
    <Router>
      <Head/>
        <Routes>
          <Route exact path='/' element={<Navigate to ="/main" /> } />
          <Route exact path='/main' element={<Main/>}></Route>
          <Route exact path='/info' element={<Info/>}></Route>
          <Route exact path='/important' element={<Important/>}></Route>
          <Route exact path='/champion' element={<Champion/>}></Route>
        </Routes>
    </Router>   
  );
}

export default App;
