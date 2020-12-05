import React from "react";
import SecureTemplate from "@/components/layout/secure-template";

const QuienesSomos = () => {
  return (
    <SecureTemplate pageTitle="Quienes Somos">
      <div className="container --full">
        <h2 className="container__title">Quienes somos</h2>
        <div className="container__full-content">
          <div className="container__wrapper">
            <h3 className="container__wrapper__title">
              <b>¡Queremos ayudarte a que estés al día!</b>
            </h3>
            <p className="container__wrapper__text">
              En Al Día queremos acompañarte en armar tus planes de pago y
              cancelaciones de los servicios y productos que utilizas.
              <br />
              <br />
              Contamos con la mejor tecnología y atención para que puedas
              gestionar tus cuentas de la manera más simple posible, sin que
              tengas que estar esperando tu recreo del mediodía o llegar a tu
              casa para poder resolver tus pagos pendientes.
              <br />
              <br />
              <b>
                ¡Consultanos por mail o Whatsapp las 24 horas de los 7 días de
                la semana!
              </b>
            </p>
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};

export default QuienesSomos;
