import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import ProjectLayout from "./pages/templates/projectLayout";
import TerminalProject from "./pages/TerminalApp";

function App() {
    return (
        <div className="App">


            {/* Routes are declared within this component */}
            <BrowserRouter>
                <Navbar />
                {/* Declared individual component */}
                <Routes>
                    <Route path = "/" element = {<HomePage />} />
                    <Route path = "/about" element = {<AboutPage />} />
                    <Route path = "/contact" element = {<ContactPage />} />
                    <Route path = "/projects" element = {<ProjectLayout/>} />
                        <Route path= "/projects/terminalApp" element = {<TerminalProject/>} />
                    <Route/>

                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;
