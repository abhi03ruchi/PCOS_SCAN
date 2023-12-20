import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Footer from '../Footer/Footer';
import { ThemeContext } from '../../context';
import { useContext } from 'react';

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#22272b' : '#eafaf8',
        color: darkMode && 'white',
      }}
    >
      <Navbar />
      <About />
      <Footer />
      <style jsx>{`
        .nav {
          background-color: ${darkMode ? ' #22272b;' : 'inherit'};
        }
        .l-header {
          background-color: ${darkMode ? ' #22272b;' : 'inherit'};
        }
        .nav__link {
          color: ${darkMode ? 'whitesmoke' : '#008D70'};
        }
        .nav__logo{
          color: ${darkMode ? 'white' : 'black'};
        }
        .overview{
          color: ${darkMode ? 'whitesmoke' : '#006666'};
        }
        .meaning-text{
          color: ${darkMode ? '#fff' : '#008080'};
        }
        .contact{
          color: ${darkMode ? '#ff6f61' : 'black'};
        }
        .one{
          color: ${darkMode ? '#fff' : '#008080'};
        }
        .t{
          background-color: ${darkMode ? ' #22272b;' : '#eafaf8'};
        }
      `}</style>
    </div>
  );
};

export default Home;
