import React from "react";

const Block = (props) => {
  const { heading, para1, para2, para3, para4 } = props;
  return (
    <div>
      <h4 className="container__wrapper__subtitle">
        <b>{heading}</b>
      </h4>
      <p className="container__wrapper__text">{para1}</p>
      <p className="container__wrapper__text">{para2}</p>
      <p className="container__wrapper__text">{para3}</p>
      <p className="container__wrapper__text">{para4}</p>
    </div>
  );
};

export { Block };
