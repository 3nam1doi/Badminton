import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Taiwan.css";

const Taiwan = ({
  className = "",
  unsplashUDv1n0xIpU8,
  nhTpLuynTDTTPhTh,
  lu3S215ALThngKitP15,
  propLeft,
}) => {
  const taiwanStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`taiwan ${className}`} style={taiwanStyle}>
      <div className="rectangle-group">
        <div className="group-child4" />
        <img
          className="unsplashudv1n0xipu8-icon"
          alt=""
          src={unsplashUDv1n0xIpU8}
        />
      </div>
      <div className="group-parent3">
        <div className="nh-tp-luyn-tdtt-ph-th-parent">
          <div className="nh-tp-luyn">{nhTpLuynTDTTPhTh}</div>
          <div className="h">
            <span>299.000</span>
            <span className="h1">/1h</span>
          </div>
          <div className="lu-3-s">{lu3S215ALThngKitP15}</div>
        </div>
        <div className="star">
          <img className="star-child" alt="" src="/star-1.svg" />
          <img className="star-item" alt="" src="/star-2.svg" />
          <img className="star-inner" alt="" src="/star-3.svg" />
          <img className="star-icon" alt="" src="/star-4.svg" />
          <img className="star-child1" alt="" src="/star-5.svg" />
        </div>
        <button className="booking1">
          <div className="booking-child" />
          <div className="booking-now">Booking now</div>
        </button>
      </div>
    </div>
  );
};

Taiwan.propTypes = {
  className: PropTypes.string,
  unsplashUDv1n0xIpU8: PropTypes.string,
  nhTpLuynTDTTPhTh: PropTypes.string,
  lu3S215ALThngKitP15: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default Taiwan;
