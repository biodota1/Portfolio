import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PublicLayout() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
