import React, { Component } from "react";

import Categories from "./components/Categories/Categories";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Form from "./components/Register/Form";
import Footer from "./components/Footer/Footer";

function App() {

  const Router = () => {

    const location = window.location.pathname;

    if(location == '/register'){
        return <Form />
    } else {
        return (
          <section>
            <Header />
            <Banner />
            <Categories />
            <Footer />
          </section>
        );
    }
  }
      return (
        <>
          { Router() }
        </>
    )
}

export default App;
