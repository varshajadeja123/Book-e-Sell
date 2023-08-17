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

// // import the logo image
// import { ThemeProvider, createTheme } from "@material-ui/core";
// import "./App.css";
// import { Home, User } from "./User";
// import { Profile } from "./components/profile/profile";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   // variable
//   let x = 5;

//   const array = [10, 20, 30, 40, 50];
//   // if we use map it gives true/false value or if we use filter thn it gives number of filtered value
//   // const filteredArray = array.map((item) => item!== 30);
//   // console.log("array", filteredArray);
//   const Username = " VARSHA";

// // customize color palette
//   const theme = createTheme(
//     {
//       palette: {
//         primary: {
//           main: "#d32f2f",
//         },
//         secondary: {
//           main: "#03a9fa"
//         },
//         shadows: [
//           "none",
//           "1px 1px gray"
//         ]
//       }
//     }
//   )
//   return (
//     <BrowserRouter>
//       <ThemeProvider theme={theme}>

//         <div className="App">
//           <header>This is Header</header>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route exact path={Route.Path} element={<Register />} />
//             <Route path="/User" element={<User name={Username} age={20} />} />
//             <Route path="/profile" element={<Profile />} />
//           </Routes>
//           <footer>This is Footer</footer>
//         </div>

//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }

// export default App;
