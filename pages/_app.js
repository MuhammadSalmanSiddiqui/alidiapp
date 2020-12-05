// import "../styles/sass/base.scss";
import React, { useContext, useReducer } from "react";
import Context from "../context/context";
import reducer from "../reducer/reducer";
import "../public/css/base.css";

function MyApp({ Component, pageProps }) {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
