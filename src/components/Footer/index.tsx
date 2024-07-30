import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import PAGES, { PAGENAMES as P } from '../pages/pages';
import { LuAtom } from 'react-icons/lu';
import { FaFacebook, FaInstagram, FaTwitch, FaGithub } from 'react-icons/fa';

import "./Footer.css";

function Footer(): ReactElement {
  return (
    <div className="footer-container">
      <section className="footer-contact">
        <p className="footer-contact-header">
          Any questions or need a support? 
        </p>
        <p className="footer-contact-text">
          Enter your email and get informations from us directly.
        </p>
        <div className="contact-input-area">
          <form>
            <input 
              className="contact-input"
              type="email" 
              name="email" 
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">send</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to={PAGES[P.ABOUT].url}>How it works</Link>
            <Link to={PAGES[P.HOME].url}>Our goals</Link>
            <Link to={PAGES[P.HOME].url}>Careers</Link>
            <Link to={PAGES[P.HOME].url}>Investors</Link>
            <Link to={PAGES[P.ABOUT].url}>Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to={PAGES[P.ABOUT].url}>Contact</Link>
            <Link to={PAGES[P.HOME].url}>Support</Link>
            <Link to={PAGES[P.HOME].url}>FAQ</Link>
            <Link to={PAGES[P.HOME].url}>Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Product</h2>
            <Link to={PAGES[P.ABOUT].url}>Features</Link>
            <Link to={PAGES[P.HOME].url}>Enterprise</Link>
            <Link to={PAGES[P.HOME].url}>Security</Link>
            <Link to={PAGES[P.HOME].url}>Pricing</Link>
            <Link to={PAGES[P.ABOUT].url}>Resources</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to={PAGES[P.HOME].url}>Facebook</Link>
            <Link to={PAGES[P.ABOUT].url}>Instagram</Link>
            <Link to={PAGES[P.HOME].url}>Github</Link>
            <Link to={PAGES[P.HOME].url}>Twitch</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to={PAGES[P.HOME].url} className="footer-logo-link">
              Fake Inc <LuAtom className="footer-icon"/>
            </Link>
          </div>
          <small className="copyright">FAKE INC © 2024</small>
          <div className="social-icons">
            <Link 
              className="social-icon-link facebook"
              to="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook/>
            </Link>
            <Link 
              className="social-icon-link instagram"
              to="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram/>
            </Link>
            <Link 
              className="social-icon-link github"
              to="https://github.com"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub/>
            </Link>
            <Link 
              className="social-icon-link twitch"
              to="https://twitch.tv"
              target="_blank"
              aria-label="Twitch"
            >
              <FaTwitch/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;