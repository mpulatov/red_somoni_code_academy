import React from "react";
import {
  About,
  Courses,
  FaqsItems,
  Footer,
  Header,
  Navbar,
  Step,
} from "./index";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Step />
      <Courses />
      <FaqsItems />
      <Footer />
    </>
  );
}

export default Home;
