import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
    return (
        <>
            <Header />
            <Routes> 
            <Route index path="/" element={WelcomePage} />            
            </Routes>
            <Footer />
        </>
    );
}

export default App;

 