import React, { useContext } from "react";
import SecureTemplate from "@/components/layout/secure-template";
import Link from "next/link";
import Context from "../../../context/context";
import * as actionTypes from "../../../actionTypes/actionTypes";

const SuccessCoupon = () => {
  const { state, dispatch } = useContext(Context);

  const handleOnSubmit = () => {
    dispatch({ type: actionTypes.RESET_STATE });
  };

  return (
    <SecureTemplate DNI={true}>
      <div className="container">
        <h2 className="container__title container__title--small">
          Pago finalizado
        </h2>
        <div className="steps">
          <div className="steps__item --done">
            <i className="fas fa-map-marker"></i>
            Paso 1
          </div>
          <div className="steps__item --done">
            <i className="fas fa-map-marker"></i>
            Paso 2
          </div>
          <div className="steps__item --done">
            <i className="fas fa-map-marker"></i>
            Paso 3
          </div>
          <div className="steps__item --done">
            <i className="fas fa-map-marker"></i>
            Paso 4
          </div>
          <div className="steps__item --active">
            <i className="fas fa-map-marker"></i>
            Paso 5
          </div>
        </div>
        <div className="modal --no-padding-t">
          <Link href="/download-pdf">
            <a className="modal__back-button button --back-button">
              <i className="fas fa-angle-left"></i> Volver
            </a>
          </Link>
          <ul className="mobile-user-nav">
            <li>
              <span>DNI: 36.153.123</span>
            </li>
            <li>
              <a href="">
                Consultar otro DNI <i className="fas fa-angle-right"></i>
              </a>
            </li>
          </ul>
          <div className="mobile-modal-nav">
            <Link href="/download-pdf">
              <a className="back-button">
                <i className="fas fa-arrow-left"></i>
              </a>
            </Link>
            <div className="mobile-step-info">
              <span className="mobile-step-info__title">Paso 5</span>
              <span className="mobile-step-info__subtitle">Cupón emitido</span>
            </div>
          </div>
          <h2 className="modal__title">
            <i className="fas fa-check"></i>
            Cupón emitido <b>N° 254.324.456</b>
          </h2>
          <h3 className="modal__subtitle">Recordá pagar antes del xx/xx/19</h3>
          <div className="success-nav">
            <div className="success-nav__item">
              <figure className="succes-nav__icon">
                <img src="images/succes/debt.svg" alt="" />
              </figure>
              <h4 className="success-nav__title">
                ¿Desea buscar <br />
                otras deudas?
              </h4>
              <Link href="/debts-list">
                <a className="button --primary --gradient --icon-left">
                  <span>
                    <i className="fas fa-angle-left"></i> Volver al inicio
                  </span>
                </a>
              </Link>
            </div>
            <div className="success-nav__item">
              <figure className="succes-nav__icon">
                <img src="images/succes/dni.svg" alt="" />
              </figure>
              <h4 className="success-nav__title">
                ¿Desea buscar <br />
                otro DNI?
              </h4>
              <Link href="/">
                <a
                  onClick={handleOnSubmit}
                  className="button --primary --gradient --icon-right"
                >
                  <span>
                    Buscar dni <i className="fas fa-angle-right"></i>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="mobile-modal-buttons">
            <Link href="/debts-list">
              <a href="" className="button --gradient --primary">
                Buscar otras deudas
              </a>
            </Link>
            <Link href="/">
              <a
                onClick={handleOnSubmit}
                href=""
                className="button --gradient --primary"
              >
                Buscar otro dni
              </a>
            </Link>
          </div>
          <div className="mobile-step-index">
            <span className="mobile-step-index__item"></span>
            <span className="mobile-step-index__item"></span>
            <span className="mobile-step-index__item"></span>
            <span className="mobile-step-index__item --active"></span>
            <span className="mobile-step-index__item"></span>
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};

export { SuccessCoupon };
