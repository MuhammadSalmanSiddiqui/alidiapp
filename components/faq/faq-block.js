import React, { useState } from "react";

const FaqBlock = (props) => {
  const { heading, icon, para1, para2, webLink, refLink } = props;
  const [isCollapse, setIsCollapse] = useState(false);
  const toggleCollapse = () => setIsCollapse((prev) => !prev);
  return (
    <div className={`faq__item ${isCollapse && '--open'}`} onClick={toggleCollapse}>
      <h3 className="faq__question">
        {heading}
        <i className={icon}></i>
      </h3>
      <div className="faq__answer">
        <p className="faq__answer__text">
          {para1}
          <a href={refLink} target="_blank">
            {webLink}
          </a>
          {para2}
        </p>
      </div>
    </div>
  );
};

export { FaqBlock };
