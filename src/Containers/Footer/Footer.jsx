import React from "react";
import "./Footer.scss";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="section-content dark">
      <div className="container-content">
        <div className="mh__footer">
          <div></div>
          <p>© {year} Copyright Allrights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
