import React, { Component } from "react";

import Categories from "./components/Categories/Categories";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section>
      <Header />
      <Banner />
      <Categories />
      <Footer />
    </section>
  );
}

export default App;
