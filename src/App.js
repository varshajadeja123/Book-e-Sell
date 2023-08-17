import React, { createContext, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";
import "./assets/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Register from "./pages/register";
import { BrowserRouter } from "react-router-dom";
import { MainNavigation } from "./components/MainNavigation";
import loader from "../src/assets/images/loader.gif";
import Header from "./components/header";
import { Footer } from "./components/footer";
import { AuthWrapper } from "./constant/context/auth";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthWrapper>
          <div className="loader-wrapper">
            <img src={loader} alt="loader" />
          </div>
          <Header />
          <main>
            <MainNavigation />
          </main>
          <Footer />
        </AuthWrapper>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
