import { useState } from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SubNav from "./components/SubNav";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SubNav />
    </>
  );
}

export default App;
