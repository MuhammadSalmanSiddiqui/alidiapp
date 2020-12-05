import React, { useState, useEffect } from "react";
import Link from "next/link";

const SecureHeader = ({ DNI, toggleModal }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };
  useEffect(() => {
    if (isMenuActive) {
      document.getElementById("__next").classList.add("--no-scroll");
    } else {
      document.getElementById("__next").classList.remove("--no-scroll");
    }
  }, [isMenuActive]);
  return (
    <header className="header">
      <Link href="/">
        <a className="logo" title="Ir al inicio">
          <h1>AL día</h1>
          <figure>
            <img src="images/logo-ng.svg" alt="Al día" />
          </figure>
        </a>
      </Link>
      {DNI && (
        <ul className="user-nav">
          <li className="user-nav__item">Pablo Pérez, DNI: 36.154.593</li>
          <li className="user-nav__item">
            <a href="" className="user-nav__link button --user-nav">
              Consultar otro DNI <i className="fas fa-angle-right"></i>
            </a>
          </li>
        </ul>
      )}
      <ul className={`nav ${isMenuActive && "--mobile-active"}`}>
        <li className="nav__item">
          <Link href="/quienes">
            <a className="nav__link button --nav">Sobre nosotros</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/terminos">
            <a className="nav__link button --nav">Términos y condiciones</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/faq">
            <a className="nav__link button --nav">Preguntas frecuentes</a>
          </Link>
        </li>
        <li className="nav__item --mobile-button">
          <a href="" className="button --gradient --whatsapp">
            <span>
              Consultas <i className="fab fa-whatsapp"></i>
            </span>
          </a>
        </li>
        <li
          className="nav__item --mobile-button"
          onClick={() => {
            toggleMenu();
            toggleModal();
          }}
        >
          <a className=" button --gradient --aldia aldia-button">
            <span>Quiero tener</span> <img src="images/logo-text.svg" alt="" />{" "}
            <span>en mi empresa</span>
          </a>
        </li>
      </ul>
      <a
        className={`hamburger ${isMenuActive && "--open"}`}
        onClick={toggleMenu}
      >
        <img className="hamburger__nav" src="/images/hamburger.svg" alt="" />
        <img className="hamburger__close" src="/images/close.svg" alt="" />
      </a>
    </header>
  );
};

export { SecureHeader };
