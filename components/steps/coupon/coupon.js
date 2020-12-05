import React from "react";
import SecureTemplate from "@/components/layout/secure-template";
import Link from "next/link";

const Coupon = () => {
  return (
    <SecureTemplate DNI={true}>
      <div className="container">
        <h2 className="container__title container__title--small">
          Cupón de pago
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
          <div className="steps__item --active">
            <i className="fas fa-map-marker"></i>
            Paso 4
          </div>
          <div className="steps__item">
            <i className="fas fa-map-marker"></i>
            Paso 5
          </div>
        </div>
        <div className="modal --no-padding-t">
          <Link href='/step-select-day'>
          <a
            className="modal__back-button button --back-button"
          >
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
          <Link href='/step-select-day'>
            <a className="back-button">
              <i className="fas fa-arrow-left"></i>
            </a>
          </Link>
            <div className="mobile-step-info">
              <span className="mobile-step-info__title">Paso 4</span>
              <span className="mobile-step-info__subtitle">
                Resumen de deuda
              </span>
            </div>
          </div>
          <h2 className="modal__title">Ya casi estamos...</h2>
          <div className="form">
            <div className="debt-description">
              <div className="debt-description__item">
                <div className="debt-description__amount">
                  <span>Deuda</span>
                  <span>$2.467,25</span>
                </div>
                <div className="debt-description__detail">
                  <span>Interés</span>
                  <span>$647,25</span>
                </div>
              </div>
              <div className="debt-description__item">
                <div className="debt-description__amount">
                  <span>Total</span>
                  <span>$3.534,50</span>
                </div>
              </div>
            </div>
            <Link href="/download-pdf">
              <div className="modal__buttons">
                <a href="download-pdf.html">
                  <button className="button --gradient --primary --icon-right">
                    <span>
                      Pagar <i className="fas fa-angle-right"></i>
                    </span>
                  </button>
                </a>
              </div>
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

export { Coupon };
