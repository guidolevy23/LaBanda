import './App.css';
import Contact from './Components/Contact/contact';
import Home from './Components/Home/home';
import History from './Components/History/history';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Somos from './Components/Somos/somos';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/contacto' element={<Contact/>}/>
            <Route exact path='/somos' element={<Somos/>}/>
            <Route exact path='/historia' element={<History/>}/>
            

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
