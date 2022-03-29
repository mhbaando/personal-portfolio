import { useState } from "react";
import {
  Header,
  About,
  Projects,
  Clients,
  CounterContainer,
} from "../../Containers/index";
const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Clients />
      <CounterContainer />
    </>
  );
};

export default Home;
