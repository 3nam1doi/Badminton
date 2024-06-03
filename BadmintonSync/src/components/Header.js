import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="header">
      <header className="frame-inner">
        <div className="navigation-wrapper">
          <div className="navigation">
            <nav className="items">
              <div className="explore-wrapper">
                <a className="explore" href="/">
                  <div className="explore1">Explore</div>
                </a>
              </div>
              <a
                className="help-centre"
                href="/help-centre"
              >
                Help Centre
              </a>
              <a
                className="help-centre"
                href="/about-us"
              >
                About us
              </a>
              <a
                className="help-centre"
                href="/refer-a-centre"
              >
                Refer a centre to us
              </a>
            </nav>
            <div className="items1">
              <button className="button" onClick={() => window.location.href = '/login'}>
                <div className="login">Login</div>
              </button>
              <button className="button1" onClick={() => window.location.href = '/sign-up'}>
                <div className="sign-up">Sign up</div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <button className="logo" onClick={() => window.location.href = '/'} />
      <img
        className="ky-thuat-danh-cau-long-co-ban-icon"
        alt=""
        src="/kythuatdanhcaulongcobanimage-1@2x.png"
      />
    </section>
  );
};

export default Header;
