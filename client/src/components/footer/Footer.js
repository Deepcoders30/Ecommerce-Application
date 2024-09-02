import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import "./footer.scss";
import creditCardImg from "../../assets/creditcardicons.png";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="content">
          <div className="footer-left">
            <h3 className="title">Follow Us</h3>
            <ul className="follow">
              <li classname="hover-link">
                <AiOutlineInstagram />
              </li>
              <li classname="hover-link">
                <AiOutlineFacebook />
              </li>
              <li classname="hover-link">
                <AiOutlineTwitter />
              </li>
              <li classname="hover-link">
                <AiOutlineMail />
              </li>
            </ul>
          </div>

          <div className="footer-right">
            <h3 className="title">Company</h3>
            <ul className="company">
              <li className="hover-link">Contact Us</li>
              <li className="hover-link">Privacy Policy</li>
              <li className="hover-link">Return and Exchange Policy</li>
              <li className="hover-link">Shipping Policy</li>
              <li className="hover-link">Terms and Conditions</li>
            </ul>
          </div>
        </div>

        <div className="sub-footer center">
          <div className="credit-card-img">
            <img src={creditCardImg} alt="img" />
          </div>
          <p>Copyright {new Date().getFullYear()} ©️ <strong>DEEPOSZ.</strong></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
