import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/islogin";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Singin from "./components/Singin";
import Singup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Donation from "./components/Donation";
import Myrewards from "./components/Myrewards";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signin" element={<Singin />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/myrewards" element={<Myrewards />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
