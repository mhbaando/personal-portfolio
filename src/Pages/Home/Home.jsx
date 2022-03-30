import { useState } from "react";
import {
  Header,
  About,
  Projects,
  Clients,
  CTAContainer,
  Contacts,
} from "../../Containers/index";
const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Clients />
      <CTAContainer />
      <Contacts />
    </>
  );
};

export default Home;
