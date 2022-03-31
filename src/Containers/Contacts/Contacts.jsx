import React from "react";
import "./Contacts.scss";
import { ContactForm, Contactinfo } from "../../Components/index";

const Contacts = () => {
  return (
    <div className="section-content" id="contacts">
      <div className="container-content">
        <div className="mh__contacts">
          <Contactinfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
