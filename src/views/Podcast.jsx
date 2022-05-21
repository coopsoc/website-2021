import React, { useRef } from "react";

import Navigation from "components/Navigation.jsx";
import Header from "components/Header.jsx";
import Footer from "components/Footer.jsx";

const Podcast = () => {
  const mainRef = useRef();

  return (
    <>
      <Navigation />
      <main ref={mainRef}>
        <Header />
      </main>
      <Footer />
    </>
  );
};

export default Podcast;
