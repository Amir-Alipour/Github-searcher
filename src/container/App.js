import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Search from "../components/search/Search";
import Recently from "../components/recently/Recently";
import Suggest from "../components/suggest/Suggest";
import Profile from "../components/Profile/Profile";

function App() {
    return (
        <div className="App w-100 bg-gray-500">
            <Router>
                <Header />

                <Route path="/" exact>
                    <Search />

                    <Recently />

                    {/* <Suggest /> */}
                </Route>

                <Route path="/:username">
                    <Profile />
                </Route>
            </Router>
        </div>
    );
}

export default App;
