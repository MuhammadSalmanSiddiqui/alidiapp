import Link from "next/link";
import React from "react";
const QuieroModal = ({ isShow, toggleModal }) => {
  return (
    <div
      className={`full-shadow ${isShow && "--active"}`}
      onClick={toggleModal}
    >
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup__header">
          <div className="popup__header__nav">
            <a className="popup__back-button">Volver</a>
            <a onClick={toggleModal} className="popup__close-button">
              <i className="fas fa-times"></i>
            </a>
          </div>
          <h2 className="popup__title">
            <span>¡Sumá </span>
            <img src="images/logo-text.svg" alt="" />
            <span>a tu empresa!</span>
          </h2>
        </div>

        <img src="/images/popup/buildings.svg" alt="" className="popup__draw" />

        <h3 className="popup__subtitle">
          Agilizá tus pagos de una manera fácil y eficaz
        </h3>

        <p className="popup__text">
          Llena el siguiente formulario para saber más, en breve nos vamos a
          comunicar con vos
        </p>

        <form action="" className="popup__form">
          <select name="" id="">
            <option value="" defaultValue disabled>
              Rubro
            </option>

            <option value="">Rubro</option>

            <option value="">Rubro</option>

            <option value="">Rubro</option>

            <option value="">Rubro</option>

            <option value="">Rubro</option>

            <option value="">Rubro</option>
          </select>

          <select name="" id="">
            <option value="" defaultValue disabled>
              Motivo
            </option>

            <option value="">Motivo</option>

            <option value="">Motivo</option>

            <option value="">Motivo</option>

            <option value="">Motivo</option>

            <option value="">Motivo</option>

            <option value="">Motivo</option>
          </select>

          <textarea name="" id="" placeholder="Aclaraciones"></textarea>
        </form>
        <Link href="/debts-list">
          <a className="button --primary --gradient --disabled">Enviar</a>
        </Link>
      </div>
    </div>
  );
};

export default QuieroModal;
