import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoToTop from './components/GoToTop/GoToTop';
import RegisterAndLogin from './components/Login/RegisterAndLogin';
import FirebaseImageUpload from './components/FirebaseImageUpload/FirebaseImageUpload';



function App() {
  return (
    <>
      <GoToTop/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<RegisterAndLogin/>}/>
            <Route path="/upload" element={<FirebaseImageUpload/>}/>
          </Routes>
        </BrowserRouter>
 
    </>
  );
}

export default App;
