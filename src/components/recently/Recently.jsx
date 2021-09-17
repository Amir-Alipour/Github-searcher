import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllRecently } from "../../features/recently/recentlySlice";
import "./Recently.css";
import RecentlyProfile from "./RecentlyProfile";

function Recently() {
    const recently = useSelector(selectAllRecently);
    const [, forceUpdate] = useState(1);

    useEffect(() => {
        forceUpdate((p) => p + 1);
    }, [recently]);

    return (
        <>
                <div className="container mt-10 text-white">
                    <p className="h3 text-gray-300">- Your Recent Searches</p>

                    <div className="container-fluid mt-2">
                        <div className="row">
                        {recently.length > 0 ? (
                            <>
                                {recently.map(
                                    (rec, index) =>
                                        index < 6 && (
                                            <RecentlyProfile
                                                key={rec.node_id}
                                                avatar={rec.avatar_url}
                                                username={rec.login}
                                                name={rec.name}
                                                follower={rec.followers}
                                                following={rec.following}
                                                repos={rec.public_repos}
                                            />
                                        )
                                )}
                            </>
                        ) : (
                            <RecentlyProfile avatar={`https://github.githubassets.com/favicons/favicon-dark.svg`} username="noone" name="null" follower="0" following="0" repos="0" />
                        )}
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Recently;
