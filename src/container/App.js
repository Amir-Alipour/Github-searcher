import {Suspense, lazy} from "react"
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./layouts/Header";

const Search = lazy(() => import("../components/search/Search"));
const Recently = lazy(() => import("../components/recently/Recently"));
const Suggest = lazy(() => import("../components/suggest/Suggest"));
const Profile = lazy(() => import("../components/Profile/Profile"));
const About = lazy(() => import("../components/about/About"));

function App() {
    return (
        <div className="App w-100 bg-gray-500">
            <Router basename={process.env.PUBLIC_URL}>
                <Suspense fallback={<h1>Loading...</h1>}>

                    <Header />

                    <Route path="/" exact>
                        <Search />

                        <Recently />

                        <Suggest />
                    </Route>

                    <Route path="/about/me">
                        <About />
                    </Route>

                    <Route exact path="/:username">
                        <Profile />
                    </Route>

                </Suspense>
            </Router>
        </div>
    );
}

export default App;