import React from "react";
import Frame from "../components/Frame";
import Booking from "../components/Booking";
import NhngSnNiBt from "../components/NhngSnNiBt";
import Header from "../components/Header"; // Thêm import cho Header
import "./Guest.css";

const Guest = () => {
  return (
    <div className="guest">
      <Header /> {/* Sử dụng component Header */}
      <Frame />
      <section className="frame">
        <Booking />
      </section>
      <section className="frame1">
        <NhngSnNiBt />
      </section>
      <div className="frame2">
        <button className="more-wrapper">
          <div className="more">More</div>
        </button>
      </div>
    </div>
  );
};

export default Guest;
