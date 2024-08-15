import { useState } from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SubNav from "./components/SubNav";
import AppRouter from "./routers/AppRouter";
/* The following line can be included in your src/index.js or App.js file */
// import './App.scss';

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

