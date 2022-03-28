import { useState } from "react";
import { Header, About } from "../../Containers/index";
const Home = () => {
  // // cursor state
  // const [cursorX, SetCursorX] = useState();
  // const [cursorY, SetCursorY] = useState();

  // // follow cursor on move
  // window.addEventListener("mousemove", (e) => {
  //   SetCursorX(e.pageX);
  //   SetCursorY(e.pageY);
  // });
  return (
    <>
      {/* <div
        className="cursor"
        style={{ top: cursorY + "px", left: cursorX + "px" }}
      ></div> */}
      <Header />
      <About />
    </>
  );
};

export default Home;
