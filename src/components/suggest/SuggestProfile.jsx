import { useLayoutEffect, useState } from "react"
import Api from '../../utils/AxiosConfig';

function SuggestProfile({avatar, username}) {
    const [following, setFollwing] = useState();
    const [follwer, setFollwer] = useState();
    const [repos, setRepos] = useState();

    useLayoutEffect(() => {
        Api.get(`/users/${username}/followers`).then(res => setFollwer(res.length));
        Api.get(`/users/${username}/following`).then(res => setFollwing(res.length));
        Api.get(`/users/${username}/repos`).then(res => setRepos(res.length));
    }, [username])

    return (
        <div className="col-6 col-md-4 col-lg-3 col-xl-2 h-52 p-3">
            <div
                className="w-full h-full rounded p-2 cursor-pointer"
                style={{ backgroundColor: "#2d333b" }}
            >
                <div className="flex ">
                    <img
                        src={avatar}
                        alt={`${username} Github Profile`}
                        className="w-16 h-16 rounded-lg shadow"
                    />

                    <p className="ml-2">{username}</p>
                </div>

                <div className="mt-3 text-gray-300">
                    <p>following : {following > 29 ? "more than 30" : following}</p>
                    <p>follwer : {follwer > 29 ? "more than 30" : follwer}</p>
                    <p>repository : {repos > 28 ? "more than 30" : repos}</p>
                </div>
            </div>
        </div>
    )
}

export default SuggestProfile
