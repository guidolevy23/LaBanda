import './App.css';
import Contact from './Components/Contact/contact';
import Home from './Components/Home/home';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/contacto' element={<Contact/>}/>
            

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
