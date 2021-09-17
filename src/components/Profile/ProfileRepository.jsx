import { useLayoutEffect, useState } from "react";
import Api from "../../utils/AxiosConfig";
import Repository from "./Repository";

function ProfileRepository({ username }) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        Api.get(`/users/${username}/repos`).then((res) => {
            setRepos(res);
            setLoading(false);
        });
    }, [username]);

    return (
        <div
            className="w-full container-fluid py-3 rounded-md shadow repos_container"
            style={{
                overflowY: "auto",
                border: "1px solid rgba(255,255,255,0.1)",
            }}
        >
            <div className="row">
                {repos && !loading ? (
                    repos.map((rep) => <Repository rep={rep} />)
                ) : (
                    <div>Loading ...</div>
                )}
            </div>
        </div>
    );
}

export default ProfileRepository;
