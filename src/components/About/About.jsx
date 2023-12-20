import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {  Link } from "react-router-dom";

import { Typography } from "@mui/material";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import imag1 from "./img1.png";
import imag2 from "./img2.png";

import t1 from "./deepa.jpg";
import t2 from "./abhiruchi.png";

import Stat from "../stats/Stat";
import {signOut} from 'firebase/auth';
import { database } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history('/');
    });
  };

  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__img"
            data-aos="fade-right"
            data-aos-duration="500">
            <img src={pic1} alt="" />
          </div>
          <div className="home__data"
            data-aos="fade-left"
            data-aos-duration="500">
            <h1 className="home__title">Cutting-Edge AI-Driven TechNology  </h1>
            <p className="home__description">PCOS SCAN - Incidental Detection of Polycystic Ovary Syndrome  </p>
            {/* create a button usinf */}
            <div className="home-button"><Link to="/upload" className="button-link" style={{ color: 'white'}}>Schedule a Demo</Link> </div>

          </div>
        </div>
      </section>

      <div className="dha-overview bd-container" id="about" >
        <div className="left">
          <div className="overview-content">
            <Typography variant="h2" fontFamily={'Fredoka'} sx={{ color: "#006666", marginTop: 5, marginLeft: 9, fontWeight: 650 }}>An Overview</Typography>

            <Typography align="justify" variant="body1" fontFamily={'Arimo'} className="overview" fontSize={22} sx={{ color: "#222344", margin: 9, marginBottom: 10 }}>PCOS SCAN  is a cutting-edge software specializing in medical imaging solutions, particularly focused on the detection of Polycystic Ovary Syndrome (PCOS) through ultrasound (USG) scan images. Their innovative platform employs advanced machine learning algorithms to analyze and interpret ultrasound data, enabling accurate and early diagnosis of PCOS. <br /> With a commitment to improving women's health, PCOS SCAN offers a user-friendly interface for healthcare professionals, facilitating efficient and reliable detection of PCOS through non-invasive ultrasound imaging. The company strives to contribute to early intervention and personalized care in the realm of reproductive health.</Typography>
            {/* <button  onClick={() => scrollToSection()}>Get In Touch</button> */}
             <a href="#foots">Get In Touch </a> 
          </div>

        </div>
        <div className="right">
          <img src={imag1} alt="hello" />
          <img src={imag2} alt="hello" />
        </div>
      </div>


      <section  id="features" className="section stats bd-container" aria-label="stats">
        <div className="stats-container">
          <ul className="grid-list">
            <li>
              <Stat
                cardTitle="0%"
                cardText="Integration Effort"
                style="170, 75%, 41%"
                fontSize="35"
              />
            </li>
            <li>
              <Stat
                cardTitle="98.89%"
                cardText="Accuracy"
                style="351, 83%, 61%"
                fontSize="35"
              />
            </li>
            <li>
              <Stat
                cardTitle="100%"
                cardText="Precision"
                style="42, 94%, 55%"
                fontSize="35"
              />
            </li>
            <li>
              <Stat
                cardTitle="2000"
                cardText="Scans for Training "
                style="260, 100%, 67%"
                fontSize="35"
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="women section bd-container">
        {/* I want to add an image here .  */}
        <div className="women__img">
          <img src={pic2} alt="" />
        </div>
      </section>


      {/* <section className="share section bd-container" id="learn_more">
        <div className="share__container bd-grid">
          <div className="share__img"
            data-aos="fade-right"
            data-aos-duration="500">
            <img src={pic2} alt="" />
          </div>
          <div className="share__data"
            data-aos="fade-left"
            data-aos-duration="500">
            <h2 className="section-title-center"> How it Helps?</h2>
            <p className="share__description"> With Connectify, you can seamlessly connect with like-minded individuals, build diverse teams, and amplify your impact in hackathons. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae, aperiam sequi quae culpa numquam fugiat eveniet aliquid excepturi voluptatem veritatis quisquam dicta aliquam minus, dolores voluptate esse aspernatur unde ut exercitationem nam accusamus molestiae. Recusandae, molestias. Tempore distinctio laboriosam perspiciatis impedit quasi doloribus ducimus, sequi, vel amet veniam quo.</p>
          </div>
        </div>
      </section> */}

      <div className="dha-what">
        {/* <Typography variant="h2" fontFamily={'Libre Baskerville'} align="center" sx={{ color: "#222344", paddingTop: 5, marginLeft: 0.2, fontWeight: 650 }}>What we do?</Typography> */}

        <section id="support" class="swiper">
          <div class="swiper-wrapper">
            <div class="card">
              <div class="card__content">
                <span class="card__title">Real Time Notifications</span>
                <span class="card__name"></span>
                {/* <p class="card__text">Menstruators often face intense PMS during their periods which may even transform into PMDD. Moreover, queer folks often face gender dysphoria while questioning themselves and their identity. In order to address these crucial issues, WeFlo has a panel of pride friendly therapists at affordable prices so that help can be accessed by everyone.</p> */}
              </div>
            </div>

            <div class="card">
              <div class="card__content">
                <span class="card__title">support all Ultra sonographic Images</span>
                <span class="card__name"></span>
                {/* <p class="card__text">Menstruators often face intense PMS during their periods which may even transform into PMDD. Moreover, queer folks often face gender dysphoria while questioning themselves and their identity. In order to address these crucial issues, WeFlo has a panel of pride friendly therapists at affordable prices so that help can be accessed by everyone.</p> */}
              </div>
            </div>

            <div class="card">
              <div class="card__content">
                <span class="card__title">Can be deployed on-cloud or on-premises.</span>
                <span class="card__name"></span>
                {/* <p class="card__text">Due to the stigma surrounding menstruation in our society, majority of menstruators cannot access professional help even when there is something wrong. Moreover the taboo around sex education, dampens the culture of a regular visit to the gynae. Therefore, we provide gynae services at minimal costs so that no one has to suffer in silence. </p> */}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* <section className="decoration section bd-container" id="features">
        <h2 className="section-title">Features</h2>
        <div className="decoration__container bd-grid">
          <div className="decoration__data">
            <img src={f1} alt="" className="decoration__img" id="render" />
            <h3 className="decoration__title">Select TeamMates</h3>
            <p>Swipe left or right to show interest in potential teammates, effortlessly forming alliances that foster creativity, innovation, & inclusivity. </p>
            <div className="button"><Link to="/FindMate" className="button-link" style={{ color: 'white' }}>Explore</Link>
            </div>
          </div>
          <div className="decoration__data">
            <img src={f2} alt="" className="decoration__img" id="render" />
            <h3 className="decoration__title">Design Portfolio</h3>
            <p>Showcase your unique skills & experiences on your personalized portfolio page, highlighting your past projects, social media links, & involvement as a speaker, organizer, or volunteer in community events.
            </p>
            <div className="button"><Link to="./" className="button-link" style={{ color: 'white' }}>Explore</Link>
            </div>
          </div>
          <div className="decoration__data">
            <img src={f3} alt="" className="decoration__img" id="render" />
            <h3 className="decoration__title">User DashBoard</h3>
            <p>Stay organized and focused with the user dashboard, where you can manage your hackathons in a calendar, add teammates from your matches, and track your achievements along the way</p>
            <div className="button"><Link to="/dashboard" className="button-link" style={{ color: 'white' }}>Explore</Link></div>
          </div>
        </div>
      </section> */}

      <section className="decoration section bd-contain" id="team">
        <h2 className="section-title">Our Team</h2>
        <div className="decoration__container bd-grid">
          <div className="decoration__data">
            <img src={t1} alt="" className="decoration__img" id="apple_render" />
            <h3 className="decoration__title">Gargi Bhardwaj</h3>
            {/* <div className="button"><a href="./view/designsolve.html" className="button-link" style={{ color: 'white' }}>Details</a>
            </div> */}
          </div>
          <div className="decoration__data">
            <img src={t2} alt="" className="decoration__img" id="burger_render" />
            <h3 className="decoration__title">Abhiruchi Sarswat</h3>
            {/* <div className="button"><a href="./view/ideatesolve.html" className="button-link" style={{ color: 'white' }}>Details</a>
            </div> */}
          </div>
         
        </div>
      </section>


    </>
  );
};

export default About;

