import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-[4%]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
