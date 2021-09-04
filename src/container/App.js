import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header";
import Search from "../components/search/Search";
import Recently from "../components/recently/Recently";
import Suggest from "../components/suggest/Suggest";

function App() {
    return (
        <div className="App w-100 bg-gray-500">
            <Router>
                <Header />

                <Search />

                <Recently />

                <Suggest />
            </Router>
        </div>
    );
}

export default App;
