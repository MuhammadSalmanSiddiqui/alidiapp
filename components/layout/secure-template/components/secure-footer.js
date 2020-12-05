import React, { useState } from "react";
import QuieroModal from "@/components/quiero-modal/quiero-modal";

const SecureFooter = ({ Quiero, isHome, isShow, toggleModal }) => {
  return (
    <>
      <QuieroModal isShow={isShow} toggleModal={toggleModal} />
      <footer className={`footer ${isHome && "--home"}`}>
        <a href="" className="button --gradient --whatsapp">
          <span>
            Consultas <i className="fab fa-whatsapp"></i>
          </span>
        </a>
        {!Quiero && (
          <a
            className="button --gradient --aldia aldia-button"
            onClick={toggleModal}
          >
            <span>Quiero tener</span> <img src="images/logo-text.svg" alt="" />{" "}
            <span>en mi empresa</span>
          </a>
        )}
      </footer>
    </>
  );
};

export { SecureFooter };
