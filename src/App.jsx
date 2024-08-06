import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage/ArticleDetailPage";

function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:article_id" element={<ArticleDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

