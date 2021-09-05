import "./Search.css";
import { useState } from "react";
import { useHistory } from "react-router";

function Search() {
    const history = useHistory();

    const [username, setUsername] = useState("");

    const handleSearch = (e) => {
        if(e.keyCode === 13) {
            history.push(`/${username}`)
        }
    } 

    document.title = "Github Searcher | Home"
    return (
        <div className="container search__container">
            <h1 className="h1 text-white mt-7">Github Search</h1>
            <div className="search__box container h-20">
                <input
                    type="text"
                    className="search__inp"
                    placeholder="Search username..."
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </div>
        </div>
    );
}

export default Search;
