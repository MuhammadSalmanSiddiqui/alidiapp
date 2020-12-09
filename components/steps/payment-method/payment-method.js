import React, { useContext, useState } from "react";
import SecureTemplate from "@/components/layout/secure-template";
import Link from "next/link";
import Context from "../../../context/context";
import * as actionTypes from "../../../actionTypes/actionTypes";
import { getLocalStorageValues } from "../../../constants/local-storage";

const PaymentMethod = () => {
  let { PaymentMethod } = getLocalStorageValues();

  const { state, dispatch } = useContext(Context);
  const [paymentType, setpaymentType] = useState(PaymentMethod?.paymentType);
  const [paymentDues, setpaymentDues] = useState(PaymentMethod?.paymentDues);

  const handlePaymentType = (e) => {
    let paymentType = e.target.value;
    localStorage.setItem("PaymentMethod", JSON.stringify({
      paymentType,
      paymentDues
    }));
    setpaymentType(e.target.value);
  };
  const handlePaymentDues = (e) => {
    let paymentDues = e.target.value; 
    localStorage.setItem("PaymentMethod", JSON.stringify({
      paymentType,
      paymentDues
    }));
    setpaymentDues(e.target.value);
  };
  const handleOnSubmit = () => {
    let paymentMethod = {
      paymentType: paymentType,
      paymentDues: paymentDues,
    };
    dispatch({ type: actionTypes.PAYMENT_METHOD, payload: paymentMethod });
    localStorage.setItem("PaymentMethod", JSON.stringify(paymentMethod));
  };

  return (
    <SecureTemplate DNI={true}>
      <div className="container">
        <h2 className="container__title container__title--small">
          Método y forma de pago
        </h2>
        <div className="steps">
          <div className="steps__item --done">
            <i className="fas fa-map-marker"></i>
            Paso 1
          </div>
          <div className="steps__item --active">
            <i className="fas fa-map-marker"></i>
            Paso 2
          </div>
          <div className="steps__item">
            <i className="fas fa-map-marker"></i>
            Paso 3
          </div>
          <div className="steps__item">
            <i className="fas fa-map-marker"></i>
            Paso 4
          </div>
          <div className="steps__item">
            <i className="fas fa-map-marker"></i>
            Paso 5
          </div>
        </div>
        <div className="modal --no-padding-t">
          <Link href="/debts-list">
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
            <Link href="/debts-list">
              <a className="back-button">
                <i className="fas fa-arrow-left"></i>
              </a>
            </Link>
            <div className="mobile-step-info">
              <span className="mobile-step-info__title">Paso 2</span>
              <span className="mobile-step-info__subtitle">
                Método y forma de pago
              </span>
            </div>
          </div>
          <h2 className="modal__title --small">
            Tu deuda con <b>Cablevisión</b> es de:
          </h2>
          <span className="modal__debt-amount">$2.567,24</span>
          <div className="form">
            <div className="form__group">
              <div className="form-item">
                <div className="form__label">Método de pago</div>
                <div className="form__select">
                  {/* <i className="fas fa-caret-right"></i> */}
                  {/* <ul className="form__select__options"> */}
                  {typeof window === "undefined" ? (
                    "loading"
                  ) : (
                    <select
                      onChange={handlePaymentType}
                      value={paymentType}
                      className="form__select__value"
                    >
                      <optgroup
                        style={{
                          margin: "0",
                          backgroundColor: "#F3F3F3",
                          color: "black",
                          fontSize: "1.3rem",
                        }}
                      >
                        <option value="- Seleccione opción" defaultValue hidden>
                          - Seleccione opción
                        </option>
                        <option value="Rapipago">Rapipago</option>
                        <option value="Pago mis cuentas">
                          Pago mis cuentas
                        </option>
                        <option value="Pago fácil">Pago fácil</option>
                        <option value="Tarjeta de débito">
                          Tarjeta de débito
                        </option>
                        <option value="Transferencia">Transferencia</option>
                      </optgroup>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="form__group">
              <div className="form-item">
                <div className="form__label">Método de pago</div>
                <div className="form__select">
                  {/* <span className="form__select__value">- Seleccione opción -</span> */}
                  {/* <i className="fas fa-caret-right"></i> */}
                  {typeof window === "undefined" ? (
                    "loading"
                  ) : (
                    <select
                      onChange={handlePaymentDues}
                      value={paymentDues}
                      className="form__select__value"
                    >
                      <optgroup
                        style={{
                          margin: "0",
                          backgroundColor: "#F3F3F3",
                          color: "black",
                          fontSize: "1.3rem",
                        }}
                      >
                        <option value="- Seleccione opción" defaultValue hidden>
                          - Seleccione opción
                        </option>
                        <option value="1 cuota">1 cuota</option>
                        <option value="3 cuotas">3 cuotas</option>
                        <option value="6 cuotas">6 cuotas</option>
                        <option value="12 cuotas">12 cuotas</option>
                        <option value="18 cuotas">18 cuotas</option>
                      </optgroup>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <Link href="/step-select-day">
              <div className="modal__buttons">
                <a
                  href="step-select-day.html"
                  className="button --gradient --primary --disabled --icon-right"
                  onClick={handleOnSubmit}
                >
                  <span>
                    Siguiente <i className="fas fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </Link>
            <div className="mobile-step-index">
              <span className="mobile-step-index__item"></span>
              <span className="mobile-step-index__item"></span>
              <span className="mobile-step-index__item"></span>
              <span className="mobile-step-index__item --active"></span>
              <span className="mobile-step-index__item"></span>
            </div>
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};

export { PaymentMethod };
