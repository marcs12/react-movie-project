
import { useState } from "react";
import { FavoritesProvider } from "./components/FavoritesProvider"; 
import AppRouter from "./routers/AppRouter";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './styles/base/bootstrap.scss';
import "./styles/styles.scss";


function App() {
  return (
    <>
   <FavoritesProvider>
      <AppRouter />
    </FavoritesProvider>
    </>
  );
}

export default App;



