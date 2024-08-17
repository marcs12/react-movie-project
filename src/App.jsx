import { useState } from "react";
import AppRouter from "./routers/AppRouter";
import GlobalContext from "./globals/GlobalContext";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './styles/base/bootstrap.scss';
import "./styles/styles.scss";

function App() {
  const [data, setData] = useState("");
  return (
    <>
      <GlobalContext.Provider value={{ data, setData}}>
        <AppRouter />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
