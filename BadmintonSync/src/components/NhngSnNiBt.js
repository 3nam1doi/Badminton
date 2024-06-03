import Taiwan from "./Taiwan";
import PropTypes from "prop-types";
import "./NhngSnNiBt.css";

const NhngSnNiBt = ({ className = "" }) => {
  return (
    <div className={`nhng-sn-ni-bt ${className}`}>
      <div className="bali">
        <div className="rectangle-container">
          <div className="rectangle-container">
            <div className="group-child5" />
            <div className="unsplashqawcifls1g4" />
            <img
              className="cement-bags-paper-sacks-isolat-icon"
              alt=""
              src="/cementbagspapersacksisolatedwhitebackground-1@2x.png"
            />
          </div>
          <div className="group-parent5">
            <div className="sn-cu-lng-bnh-thnh-parent">
              <b className="sn-cu-lng">Sân cầu lông Bình Thạnh</b>
              <div className="h2">
                <span>299.000</span>
                <span className="h3">/1h</span>
              </div>
              <div className="cy-trm-phng">
                Số 12/ 16 Hoàng Hoa Thám, P.7, Quận Bình Thạnh.
              </div>
            </div>
            <div className="star-parent">
              <img className="group-child6" alt="" src="/star-1.svg" />
              <img className="group-child7" alt="" src="/star-2.svg" />
              <img className="group-child8" alt="" src="/star-3.svg" />
              <img className="group-child9" alt="" src="/star-4.svg" />
              <img className="group-child10" alt="" src="/star-5.svg" />
            </div>
            <button className="group-button">
              <div className="bookong-now-child" />
              <div className="booking-now1">Booking now</div>
            </button>
          </div>
        </div>
      </div>
      <div className="borobudur">
        <div className="rectangle-container">
          <div className="rectangle-container">
            <div className="group-child5" />
          </div>
          <img
            className="cement-bags-paper-sacks-isolat-icon"
            alt=""
            src="/cementbagspapersacksisolatedwhitebackground-2@2x.png"
          />
        </div>
        <div className="group-parent5">
          <div className="sn-cu-lng-bnh-thnh-parent">
            <b className="sn-cu-lng1">Sân cầu lông Gia Bảo</b>
            <div className="h4">
              <span>299.000</span>
              <span className="h3">/1h</span>
            </div>
            <div className="cy-trm-phng">
              47/2 Cây Trâm, Phường 9, Quận Gò Vấp, TpHCM
            </div>
          </div>
          <div className="star-parent">
            <img className="group-child6" alt="" src="/star-1.svg" />
            <img className="group-child7" alt="" src="/star-2.svg" />
            <img className="group-child8" alt="" src="/star-3.svg" />
            <img className="group-child9" alt="" src="/star-4.svg" />
            <img className="group-child10" alt="" src="/star-5.svg" />
          </div>
          <button className="group-button">
            <div className="bookong-now-child" />
            <div className="booking-now1">Booking now</div>
          </button>
        </div>
      </div>
      <div className="thailand">
        <div className="rectangle-container">
          <div className="group-child5" />
          <img
            className="cement-bags-paper-sacks-isolat-icon"
            alt=""
            src="/cementbagspapersacksisolatedwhitebackground-3@2x.png"
          />
          <div className="sn-cu-lng-t-c-parent">
            <b className="sn-cu-lng2">Sân cầu lông Đạt Đức</b>
            <div className="h6">
              <span>299.000</span>
              <span className="h3">/1h</span>
            </div>
            <div className="cy-trm-phng">
              5A Nguyễn Văn Lượng, Phường 16, Quận Gò Vấp
            </div>
          </div>
          <div className="star2">
            <img className="group-child6" alt="" src="/star-1.svg" />
            <img className="group-child7" alt="" src="/star-2.svg" />
            <img className="group-child8" alt="" src="/star-3.svg" />
            <img className="group-child9" alt="" src="/star-4.svg" />
            <img className="group-child10" alt="" src="/star-5.svg" />
          </div>
          <button className="booking2">
            <div className="bookong-now-child" />
            <div className="booking-now1">Booking now</div>
          </button>
        </div>
      </div>
      <Taiwan
        unsplashUDv1n0xIpU8="/unsplashudv1n0xipu8@2x.png"
        nhTpLuynTDTTPhTh="Nhà tập luyện TDTT Phú Thọ"
        lu3S215ALThngKitP15="Lầu 3, Số 215A Lý Thường Kiệt, P.15, Quận 11."
      />
      <Taiwan
        unsplashUDv1n0xIpU8="/unsplash-qtegt478-8@2x.png"
        nhTpLuynTDTTPhTh="Sân cầu lông Minh Thiên "
        lu3S215ALThngKitP15="117 Lạc Long Quân, Phường 1, Quận 11, TP HCM"
        propLeft="464px"
      />
      <Taiwan
        unsplashUDv1n0xIpU8="/unsplashncmd8ule8h0@2x.png"
        nhTpLuynTDTTPhTh="Sân cầu lông Phan Đăng Lưu"
        lu3S215ALThngKitP15="8 Phan Đăng Lưu, Quận Bình Thạnh, Bình Thạnh, Hồ Chí Minh"
        propLeft="930px"
      />
      <div className="popular-destination">
        <h2 className="nhng-sn-ni">Những sân nổi bật</h2>
      </div>
    </div>
  );
};

NhngSnNiBt.propTypes = {
  className: PropTypes.string,
};

export default NhngSnNiBt;
