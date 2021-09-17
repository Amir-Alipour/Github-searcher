import { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router";
import Api from '../utils/AxiosConfig';

function OtherUserProfile({avatar, username}) {
    const history = useHistory();

    const [following, setFollwing] = useState();
    const [follwer, setFollwer] = useState();
    const [repos, setRepos] = useState();

    useLayoutEffect(() => {
        Api.get(`/users/${username}`).then(res => {
            setFollwer(res.followers)
            setFollwing(res.following)
            setRepos(res.public_repos)
        });
    }, [username])

    return (
        <div className="col-6 col-md-4 col-lg-4 col-xl-3 h-52 p-3">
            <div
                className="w-full h-full rounded p-2 cursor-pointer"
                style={{ backgroundColor: "#2d333b" }}
                onClick={() => history.push(`/Github-searcher/${username}`)}
            >
                <div className="flex ">
                    <img
                        src={avatar}
                        alt={`${username} Github Profile`}
                        className="w-16 h-16 rounded-lg shadow"
                    />

                    <p className="ml-2 mt-2">{username}</p>
                </div>

                <div className="mt-3 text-gray-300">
                    <p>following : {following}</p>
                    <p>follwer : {follwer}</p>
                    <p>repository : {repos}</p>
                </div>
            </div>
        </div>
    )
}

export default OtherUserProfile
