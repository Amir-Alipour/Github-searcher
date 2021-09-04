import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header w-full h-16 px-6 md:px-10 flex items-center justify-between">
            <div className="flex items-center">
                <Link to="/">
                    <img
                        src="https://github.githubassets.com/favicons/favicon-dark.svg"
                        alt="Github logo"
                        className="cursor-pointer"
                    />
                </Link>

                <input
                    type="text"
                    className="header__search"
                    placeholder="Search..."
                />

                <div className="flex items-center">
                    <Link
                        to="/"
                        className="px-6 text-gray-300 font-medium hover:text-gray-500 cursor-pointer"
                    >
                        Home
                    </Link>

                    <p className="hidden md:block text-gray-300 font-medium hover:text-gray-500 cursor-pointer">
                        About
                    </p>
                </div>
            </div>

            <div className="flex items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    alt="Profile Placeholder"
                    className="hidden md:block w-10 rounded-full cursor-pointer"
                />
            </div>
        </div>
    );
}

export default Header;
