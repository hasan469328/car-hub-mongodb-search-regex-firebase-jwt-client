import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Nav from "../pages/shared/Nav/Nav";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
