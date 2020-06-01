import React from "react";

// COMPONENTS
import GlobalStyle from "./css/global";
import Header from "./components/Header";
import Clock from "./components/Clock";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Clock />
      <Footer />
    </>
  );
}

export default App;
