import React, { useContext, useState } from "react";
import SecureTemplate from "@/components/layout/secure-template";
import Link from "next/link";
import Context from "../../../context/context";
import * as actionTypes from "../../../actionTypes/actionTypes";

const StepSelectDay = () => {
  const { state, dispatch } = useContext(Context);
  const [paymentPromiseDate, setpaymentPromiseDate] = useState(
    state.paymentPromiseDate
  );
  const handlepaymentPromiseDate = (e) => {
    setpaymentPromiseDate(e.target.value);
  };
  const handleOnSubmit = () => {
    dispatch({
      type: actionTypes.PAYMENT_PROMISE_DATE,
      payload: paymentPromiseDate,
    });
    console.log(state);
  };

  return (
    <SecureTemplate DNI={true}>
      <div className="container">
        <h2 className="container__title container__title--small">
          Detalle de pago
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
          <div className="steps__item --active">
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
        <div className="modal --select-day">
          <Link href="/payment-method">
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
            <Link href="/payment-method">
              <a className="back-button">
                <i className="fas fa-arrow-left"></i>
              </a>
            </Link>
            <div className="mobile-step-info">
              <span className="mobile-step-info__title">Paso 3</span>
              <span className="mobile-step-info__subtitle">
                Detalle de pago
              </span>
            </div>
          </div>
          <div className="form">
            <div className="form__group">
              <div className="form-item">
                <div className="form__label">Fecha de promesa de pago</div>
                <div className="form__select">
                  <input
                    className="form__select__value"
                    placeholder="- Seleccione fecha -"
                    type="date"
                    onChange={handlepaymentPromiseDate}
                    value={paymentPromiseDate}
                  />
                  {/* <i className="fas fa-caret-down"></i> */}
                </div>
                <p className="form__text">
                  Este saldo queda confirmado hasta la fecha comprometida de
                  pago en caso de cancelaciones y a lo largo del plan de cuotas
                  seleccionado, siempre y cuando se cumpla el vencimiento
                  establecido.
                </p>
              </div>
            </div>
            <div className="debt-description">
              <div className="debt-description__item">
                <div className="debt-description__amount">
                  <span>Deuda</span>
                  <span>$2.467,25</span>
                </div>
                <div className="debt-description__detail">
                  <span>Interés </span>
                  <span>$647,25</span>
                </div>
              </div>
              <div className="debt-description__item">
                <div className="debt-description__amount">
                  <span>Total</span>
                  <span>$3.534,50</span>
                </div>
                <div className="debt-description__detail">
                  <span>3 cuotas de $647,25</span>
                </div>
              </div>
            </div>
            <Link href="/coupon">
              <div className="modal__buttons">
                <a
                  href="cupon.html"
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
export { StepSelectDay };
