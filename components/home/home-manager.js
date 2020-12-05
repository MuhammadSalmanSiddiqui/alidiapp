import React, { useState, useContext } from "react";
import SecureTemplate from "@/components/layout/secure-template";
import Link from "next/link";
import Context from "../../context/context";
import * as actionTypes from "../../actionTypes/actionTypes";

const HomeManager = () => {
  const { state, dispatch } = useContext(Context);
  const [DNI, setDNI] = useState(state.DNI);
  const handleOnChange = (e) => {
    setDNI(e.target.value);
  };
  const handleOnSubmit = () => {
    dispatch({ type: actionTypes.DNI, payload: DNI });
  };

  return (
    <SecureTemplate page="Home" isHome>
      <div className="container --small">
        <br/>
        <h2 className="titleHome">¡Bienvenido a Al Día! </h2>

        <p className="container__text">
          Somos una compañía que se especializa en facilitar el pago de tus
          deudas con distintas empresas de una manera ágil y más conveniente.{" "}
          <br />
          <b>¡Lo más importante es poder ayudarte!</b>
        </p>
        <br/>

        <form className="form modal --dni">
          <div className="form__group">
            <div className="form__item">
              <label className="form__label">DNI</label>

              <input
                onChange={handleOnChange}
                value={DNI}
                className="form__input"
                type="text"
              />
            </div>
          </div>

          <div className="captcha">
            <img src="images/captcha-example.jpg" alt="" />
          </div>
          <Link href="/debts-list">
            <div className="modal__buttons">
              <a
                className="button --gradient --primary --disabled"
                onClick={handleOnSubmit}
              >
                <span>Consultar</span>
              </a>
            </div>
          </Link>
        </form>
      </div>
    </SecureTemplate>
  );
};
export default HomeManager;
