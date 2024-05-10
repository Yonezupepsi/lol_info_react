import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Head } from './components/header/header';
import { Main } from './pages/main/main';
import { Info } from './pages/information/info';


function App() {
  return (
    <Router>
      <Head/>
        <Routes>
          <Route exact path='/' element={<Navigate to ="/main" /> } />
          <Route exact path='main' element={<Main/>}></Route>
          <Route exact path='info' element={<Info/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
