import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"; 
import ArticlesList from './Components/ArticlesList/ArticlesList' 

function App() {
  return (
    <div id="root">
      <Header />
      <main>
      <Routes>
        <Route index path="/" element={<WelcomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/articles" element={ArticlesList}/>
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

