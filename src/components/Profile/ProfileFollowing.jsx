import { useLayoutEffect, useState } from "react";
import Api from '../../utils/AxiosConfig';
import OtherUserProfile from "../OtherUserProfile";

function ProfileFollowing({username}) {
    const [following, setFollowing] = useState([]);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        Api.get(`/users/${username}/following`).then(res => {
            setFollowing(res);
            setLoading(false)
        });
    }, [username])

    return (
        <div
            className="w-full container-fluid py-3 rounded-md shadow repos_container"
            style={{
                overflowY: "auto",
                border: "1px solid rgba(255,255,255,0.1)",
            }}
        >
            <div className="row">
                {!loading && following.length > 0 ? (
                    following.map((flw) => (
                        <OtherUserProfile
                            key={flw.node_id}
                            avatar={flw.avatar_url}
                            username={flw.login}
                        />
                    ))
                ) : (
                    <div>Loading ...</div>
                )}
            </div>
        </div>
    );
}

export default ProfileFollowing;
