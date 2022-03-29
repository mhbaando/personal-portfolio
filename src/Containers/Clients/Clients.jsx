import React from "react";
import "./Clients.scss";
import { Client, Heading, SubHeading } from "../../Components/index";
import { ClientsData } from "../../Data/index";

const Clients = () => {
  return (
    <div className="section-content">
      <div className="container-content">
        <div className="mh__clients">
          <div>
            <SubHeading text="Who Did i work with" />
            <Heading title="Clients" />
          </div>
          <Client clients={ClientsData} />
        </div>
      </div>
    </div>
  );
};

export default Clients;
