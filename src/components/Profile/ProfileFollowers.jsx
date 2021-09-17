import { useLayoutEffect, useState } from "react";
import Api from '../../utils/AxiosConfig';
import OtherUserProfile from "../OtherUserProfile";

function ProfileFollowers({username}) {
    const [followers, setFollowers] = useState([]);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        Api.get(`/users/${username}/followers`).then((res) => {
            setFollowers(res);
            setLoading(false)
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
                {!loading && followers.length > 0 ? (
                    followers.map((flw) => (
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

export default ProfileFollowers;
