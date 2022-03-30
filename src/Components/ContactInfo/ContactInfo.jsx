import React from "react";
import "./Contactinfo.scss";
import { SubHeading, Heading } from "../../Components/index";
import images from "../../Constants/images";
const ContactInfo = () => {
  return (
    <div className="mh__contactInfo">
      <div className="content-info">
        <SubHeading text="Get in Touch" />
        <Heading title="Contacts" />
        <p className="message">
          To get my service please do not hesitate to get in touch with me, and
          i will ensure that you will get the best of my services
        </p>
      </div>
      <div>
        {/* location */}
        <div className="addresses">
          <div className="address">
            <img src={images.locationIcon} alt="address Icon" />
          </div>
          <div className="info">
            <p>
              Makka Al-Mukarama Street,<br></br> Hodan Mogadishu Somalia
            </p>
          </div>
        </div>

        {/* telephone */}
        <div className="addresses">
          <div className="address">
            <img src={images.phoneIcon} alt="address Icon" />
          </div>
          <div className="info">
            <p>+252 616 672 967</p>
            <p>+252 626 672 967</p>
          </div>
        </div>

        {/* email */}
        <div className="addresses">
          <div className="address">
            <img src={images.locationIcon} alt="address Icon" />
          </div>
          <div className="info">
            <p>www.mhbaando.com</p>
            <p>info@mhbaando.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
