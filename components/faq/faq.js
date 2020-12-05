import React from "react";
import SecureTemplate from "@/components/layout/secure-template";
import { faqArray } from "@/constants/faq-array";
import { FaqBlock } from "./faq-block";

const Faq = () => {
  return (
    <SecureTemplate pageTitle="FAQ">
      <div className="container --full">
        <h2 className="container__title">Preguntas frecuentes</h2>
        <div className="container__full-content">
          <div className="container__wrapper --align-left">
            {faqArray.map((item, index) => (
              <FaqBlock
                key={index}
                heading={item.heading}
                refLink={item.refLink}
                webLink={item.webLink}
                icon={item.icon}
                para1={item.para1}
                para2={item.para2}
              />
            ))}
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};

export default Faq;
