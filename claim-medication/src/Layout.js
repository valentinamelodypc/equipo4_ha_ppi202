import React from "react";
import CntNavbar from "./components/CntNavbar";

const Layout = (props) => {
  return (
    <>
      <CntNavbar />

      {props.children}
    </>
  );
};

export default Layout;
