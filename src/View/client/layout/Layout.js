import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../include/Footer";
import Header from "../include/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
