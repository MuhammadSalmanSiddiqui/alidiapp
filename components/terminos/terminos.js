import React from "react";
import SecureTemplate from "@/components/layout/secure-template";
import { terminosArray } from "@/constants/terminos-array";
import { Block } from "./terminos-block";

const TerminosManager = () => {
  return (
    <SecureTemplate pageTitle="Terminos">
      <div className="container --full">
        <h2 className="container__title">Términos y Condiciones</h2>
        <div className="container__full-content">
          <div className="container__wrapper --align-left">
            {terminosArray.map((content, index) => (
              <Block
                key={index}
                heading={content.heading}
                para1={content.para1}
                para2={content.para2}
                para3={content.para3}
                para4={content.para4}
              />
            ))}
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};

export default TerminosManager;
