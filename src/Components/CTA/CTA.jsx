import React from "react";
import "./CTA.scss";
import { Button } from "../../Components/index";

const CTA = () => {
  return (
    <div className="mh__ctaFooter">
      <div className="content-cta">
        <h2>
          Need <span>My Services</span>
        </h2>
        <p>Please Don't Hesitate to Request My Services</p>
      </div>
      <div className="button-cta">
        <Button type="button" className="cta-button">
          Get Qoute
        </Button>
      </div>
    </div>
  );
};

export default CTA;
