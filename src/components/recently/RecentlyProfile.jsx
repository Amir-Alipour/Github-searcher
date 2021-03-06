import { useHistory } from "react-router";

function RecentlyProfile({avatar, username, name, following, follower, repos}) {
    const history = useHistory();

    return (
        <div className="col-6 col-md-4 col-lg-3 col-xl-2 h-52 p-3">
            <div
                className="w-full h-full rounded-lg p-2 cursor-pointer shadow"
                style={{ backgroundColor: "#2d333b" }}
                onClick={() => history.push(`/${username}`)}
            >
                <div className="flex">
                    <img
                        src={avatar}
                        alt={`${username} Github Profile`}
                        className="w-16 h-16 rounded-lg shadow-md"
                    />

                    <div>
                    <p className="ml-2 mt-2">{username}</p>
                    <p className="ml-2 text-gray-500" style={{width: "120px",whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{name}</p>
                    </div>
                </div>

                <div className="mt-3 text-gray-300">
                    <p>following : {following}</p>
                    <p>follwer : {follower}</p>
                    <p>repository : {repos}</p>
                </div>
            </div>
        </div>
    );
}

export default RecentlyProfile;
