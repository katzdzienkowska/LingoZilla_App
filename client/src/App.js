import React from "react";
import "./App.css";
import LingoZillaContainer from "./container/LingoZillaContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />

      <LingoZillaContainer />

      <Footer />
    </main>
  );
}

export default App;
