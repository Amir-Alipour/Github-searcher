import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header";
import Search from "../components/search/Search";

function App() {
    return (
        <div className="App w-100 h-screen bg-gray-500">
            <Router>
                <Header />

                <Search />
            </Router>
        </div>
    );
}

export default App;
