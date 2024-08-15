import { useState } from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SubNav from "./components/SubNav";
import AppRouter from "./routers/AppRouter";




function App() {
  return (
    <>
      <Header />
      <Hero />
      <SubNav />
      <AppRouter />
    </>
  );
}

export default App;

