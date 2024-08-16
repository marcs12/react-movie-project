import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SubNav from "./components/SubNav";
import AppRouter from "./routers/AppRouter";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './styles/base/bootstrap.scss';
import "./styles/styles.scss";


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

