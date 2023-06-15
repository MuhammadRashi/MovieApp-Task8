import "./Footer.css";

import quest from "../../assets/./Footer/Questions_ Call 1-844-505-2993.png";
import faq from "../../assets/./Footer/FAQ.png";
import cookie from "../../assets/./Footer/Cookie Preferences.png";
import english from "../../assets/./Footer/English.png";

import fbook from "../../assets/./Footer/fbook.png";
import insta from "../../assets/./Footer/insta.png";
import twit from "../../assets/./Footer/twit.png";
import you from "../../assets/./Footer/you.png";

import corp from "../../assets/./Footer/Corporate Information.png";
import help from "../../assets/./Footer/Help Center.png";
// import logout from "../../assets/Frame 2.png";
// import light from "../../assets/Frame 3.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="contact-container">
        <div className="contact">
          <img src={quest} alt="" />
        </div>
        <div className="contact">
          <img src={faq} alt="" />
        </div>
        <div className="contact">
          <img src={cookie} alt="" />
        </div>
        <div className="contact">
          {/* <img src={english} alt="" /> */}
          <select>
            <option value="v1">English</option>
          </select>
        </div>
      </div>
      <div className="help-container">
        <div>
          <img src={help} alt="" />
        </div>
        <div>
          <img src={corp} alt="" />
        </div>
      </div>
      <div className="tc-container">
        <div>
          <img src={corp} alt="" />
        </div>
      </div>

      <div className="socialmedia-container">
        <div>
          <img src={fbook} alt="" />
        </div>
        <div>
          <img src={insta} alt="" />
        </div>
        <div>
          <img src={twit} alt="" />
        </div>
        <div>
          <img src={you} alt="" />
        </div>
      </div>
    </div>
  );
}
