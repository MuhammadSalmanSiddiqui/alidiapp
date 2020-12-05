import React from "react";
import SecureTemplate from "@/components/layout/secure-template";
import Link from 'next/link';

const DebtsList = () => {
  return (
    <SecureTemplate Quiero={true}>
      <div className="container">
        <h2 className="container__title container__title--small">
          Listado de deudas
        </h2>

        <div className="steps">
          <div className="steps__item --active">
            <i className="fas fa-map-marker"></i>
            Paso 1
          </div>

          <div className="steps__item">
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
          <Link href='/'>
          <a  className="modal__back-button button --back-button">
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
          <Link href='/'>
            <a className="back-button">
              <i className="fas fa-arrow-left"></i>
            </a>
          </Link>
            <div className="mobile-step-info">
              <span className="mobile-step-info__title">Paso 1</span>

              <span className="mobile-step-info__subtitle">Listado de deudas</span>
            </div>
          </div>
          <h2 className="modal__title">Hola, Pablo</h2>

          <h3 className="modal__subtitle">Detalle de tus productos/servicios</h3>
          <div className="debts-table">
            <div className="debts-table__header">
              <span className="debts-table__title">Empresa</span>

              <span className="debts-table__title">Importe</span>
            </div>

            <ul className="debts-table__list">
              <li className="debts-table__item">
                <figure className="debts-table__image">
                  <img src="images/brands/cablevision.png" alt="" />
                </figure>

                <span className="debts-table__amount">$22.5667,24</span>
                <Link href='/payment-method'>
                <div className="debts-table__action">
                  <a
                    href="payment-method.html"
                    className="button --gradient --primary --small"
                  >
                    <span>Pagar</span>
                  </a>
                </div>
                </Link>
              </li>

              <li className="debts-table__item">
                <figure className="debts-table__image">
                  <img src="images/brands/fravega.png" alt="" />
                </figure>

                <span className="debts-table__amount">$123,5</span>
                <Link href='/payment-method'>
                <div className="debts-table__action">
                  <a
                    href="payment-method.html"
                    className="button --gradient --primary --small"
                  >
                    <span>Pagar</span>
                  </a>
                </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile-step-index">
            <span className="mobile-step-index__item --active"></span>

            <span className="mobile-step-index__item"></span>

            <span className="mobile-step-index__item"></span>

            <span className="mobile-step-index__item"></span>

            <span className="mobile-step-index__item"></span>
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};
export { DebtsList };
