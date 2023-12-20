
import React from "react";
import "./Footer.css";
import logo from "./pic1.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <div className="foot" id="foots">
      <div className="site-footer" >
        <div className="north">
          <Typography bgcolor={'transparent'} variant="h2" align="left" fontFamily={'Fredoka'} fontSize={25} sx={{ paddingLeft: 0, paddingTop: 2, margin: 1.5, color: "black", fontWeight: 650 }} className="contact"> Contact Us </Typography>
          <div className="one"> <ion-icon className="ions" name="location-sharp"></ion-icon>
            <div className="text">Indira Gandhi Delhi Technical University for women,  <br />
              Opp to James church, delhi-110006</div>
          </div>
          <div className="one"><ion-icon name="call-sharp"></ion-icon>
            <div className="text">  Gargi Bhardwaj <br />
              Abhiruchi Sarswat
            </div>
          </div>
          <div className="one"> <ion-icon name="mail-sharp"></ion-icon>
            <div className="text">
            gargi126btcsai21@igdtuw.ac.in</div>
          </div>
        </div>
        <div className="south">
          <div className="enactusLogo">
            <img src={logo} alt="" />
          </div>
          <div className="meaning-text">
            <p>
              <p className="para"> Empowering Women's Health - Prioritizing Care, Overcoming Challenges, Seeking Solutions</p>
              {/* <br /> */}
              <span>P</span> romoting<br />
              <span>C</span>onversations
              <br />
              <span>O</span>n Ovarian Wellness and <br />
              <span>S</span> upport
            </p>
          </div>

          <div className="follow">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                {/* <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li> */}
                <LinkedInIcon className="icons linkedin" />
                <GitHubIcon className="icons github" />
                <MailIcon className="icons mail" />
                <TwitterIcon className="icons twitter" />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="white-container"></div>
        <Typography variant="body1" align="center" sx={{ color: " #ff6f61", margin: 2, fontWeight: 650, fontSize: 20 }}>PCOS_SCAN IGDTUW Copyright @ 2023 </Typography>
      </div>
    </div>

  );
};

export default Footer;