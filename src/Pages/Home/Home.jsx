import { useState } from "react";
import {
  Header,
  About,
  Projects,
  Clients,
  CTAContainer,
  Contacts,
  Footer,
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
      <Footer />
    </>
  );
};

export default Home;
