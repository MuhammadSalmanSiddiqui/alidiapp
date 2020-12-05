import React from "react";
import SecureTemplate from "@/components/layout/secure-template";
import Link from "next/link";

const DownloadPdf = () => {
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
          <Link href='/coupon'>
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
          <Link href='/coupon'>
            <a className="back-button">
              <i className="fas fa-arrow-left"></i>
            </a>
          </Link>
            <div className="mobile-step-info">
              <span className="mobile-step-info__title">Paso 4</span>
              <span className="mobile-step-info__subtitle">
                Listado de deudas
              </span>
            </div>
          </div>
          <h2 className="modal__title">Ya casi estamos...</h2>
          <div className="download-pdf">
            <figure className="download-pdf__image">
              <img src="images/pdf/download-pdf.svg" alt="" />
            </figure>
            <div className="download-pdf__description">
              <div className="download-pdf__description__item">
                <h4 className="download-pdf__title">Cupón de pago</h4>
                <span className="download-pdf__value">N° 254.324.456</span>
              </div>
              <div className="download-pdf__description__item">
                <h4 className="download-pdf__title">Total a pagar:</h4>
                <span className="download-pdf__value">$2943,50</span>
              </div>
              <span className="download-pdf__dues">3 cuotas de $1.200</span>
              <ul className="download-pdf__nav">
                <li className="download-pdf__nav__item">
                  <a href="">
                    <i className="fas fa-download"></i> Descargar
                  </a>
                </li>
                <li className="download-pdf__nav__item">
                  <a href="">
                    <i className="fas fa-sticky-note"></i> Imprimir
                  </a>
                </li>
                <li className="download-pdf__nav__item">
                  <a href="">
                    <i className="fas fa-envelope"></i> Enviar por email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile-modal-buttons">
            <a href="" className="button --gradient --primary --icon-left">
              <i className="fas fa-download"></i> Descargar
            </a>
            <a href="" className="button --gradient --primary --icon-left">
              <i className="fas fa-sticky-note"></i> Imprimir
            </a>
            <a href="" className="button --gradient --primary --icon-left">
              <i className="fas fa-envelope"></i> Enviar por email
            </a>
            <Link href="/success-coupon">
            <a href="" className="button --gradient --primary --icon-left">
               Siguiente <i className="fas fa-angle-right"></i>
            </a>
            </Link>
          </div>
          <Link href="/success-coupon">
            <div className="modal__buttons --hide-mobile">
              <a
                className="button --gradient --primary --icon-right"
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
    </SecureTemplate>
  );
};

export { DownloadPdf };
