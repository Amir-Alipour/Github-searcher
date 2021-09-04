import './Search.css';

function Search() {
    return (
        <div className="container search__container">
            <h1 className="h1 text-white mt-7">Github Search</h1>
            <div className="search__box container h-20">
                <input type="text" className="search__inp" />
            </div>
        </div>
    )
}

export default Search
