import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import RegisterAndLogin from './RegisterAndLogin';
import Home from '../Home/Home';

function PasswordLoginWithFireBase () {
    return (
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/register" element={<RegisterAndLogin />} />
          <Route path="/home" element={<Home />} />
          {/*<Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
        </Routes>
      </div>
      </BrowserRouter>
    )
  }


export default PasswordLoginWithFireBase
