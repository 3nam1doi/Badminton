import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`frame4 ${className}`}>
      <footer className="group-parent">
        <div className="group-container">
          <div className="group-div">
            <div className="group-div">
              <div className="group-div">
                <div className="group-child" />
                <div className="group-parent1">
                  <div className="proofers-offer-a-wide-variety-wrapper">
                    <div className="proofers-offer-a">
                      Proofers offer a wide variety of tailor-made services to
                      meet your individual needs. Proofers offer a number of
                      core services which include proofreading and copy-editing
                      (thesis, dissertations, essays reports), document
                      formatting and plagiarism
                    </div>
                  </div>
                  <div className="home-parent">
                    <div className="home">Home</div>
                    <div className="submit-ordr">Submit Ordr</div>
                    <div className="services">Services</div>
                    <div className="pricing">Pricing</div>
                    <div className="quick-links">Quick Links</div>
                  </div>
                  <div className="subscribe-newsletter-parent">
                    <div className="subscribe-newsletter">
                      Subscribe Newsletter
                    </div>
                    <div className="group-parent2">
                      <img className="group-item" alt="" src="/group-987.svg" />
                      <img
                        className="group-inner"
                        alt=""
                        src="/group-988.svg"
                      />
                      <img className="group-icon" alt="" src="/group-989.svg" />
                      <img
                        className="group-child1"
                        alt=""
                        src="/group-990.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="line-div" />
                <div className="privacy-policy">Privacy Policy</div>
                <div className="trms-condition">{`Trms & Condition`}</div>
                <div className="copyright-2024">{`
Copyright: © 2024 `}</div>
              </div>
            </div>
            <div className="group-child2" />
          </div>
          <div className="rectangle-div" />
          <div className="group-child3" />
          <div className="your-email">Your Email</div>
          <img className="vector-icon" alt="" src="/vector@2x.png" />
          <img className="vector-icon1" alt="" />
        </div>
        <img className="logo-icon" alt="" src="/logo@2x.png" />
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
