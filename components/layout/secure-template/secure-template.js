// @flow
import React, { useState } from "react";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import { SecureHeader, SecureFooter } from "./components";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const SecureTemplate = (props) => {
  const {
    pageTitle,
    pageDescription,
    pageKeywords,
    children,
    DNI,
    Quiero,
  } = props;
  const [isShow, setIsShow] = useState(false);
  const toggleModal = () => setIsShow((prev) => !prev);
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/base.css" />
        <link rel="stylesheet" type="text/css" href="/css/fontawesome.css" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />{" "}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
        <title>{pageTitle || "Al día"}</title>
        <meta
          name="description"
          content={pageDescription}
          data-react-helmet="true"
        />
        <meta name="keywords" content={pageKeywords} data-react-helmet="true" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,500,700&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/39f2458975.js" />
      </Head>
      <SecureHeader DNI={DNI} toggleModal={toggleModal} />
      {children}
      <SecureFooter Quiero={Quiero} toggleModal={toggleModal} isShow={isShow} />
    </>
  );
};

export default SecureTemplate;
