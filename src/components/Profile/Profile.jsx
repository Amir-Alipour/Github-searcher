import "./Profile.css";
import { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchProfile } from "../../features/profile/profileActions";
import {
    addRecently,
    selectAllRecently,
} from "../../features/recently/recentlySlice";
import ProfileTabs from "./ProfileTabs";

function Profile() {
    const { username } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile.profile);
    const recently = useSelector(selectAllRecently);
    const haveError = useSelector((state) => state.profile.error);

    useLayoutEffect(() => {
        if (haveError) {
            history.push("/");
        }
    }, [history, haveError]);

    useLayoutEffect(() => {
        dispatch(fetchProfile(username));
    }, [dispatch, username]);

    useEffect(() => {
        if (profile.login) {
            let even = (res) => res.login === profile.login;
            let havingThisRec = recently.some(even);
            if (!havingThisRec) {
                dispatch(addRecently(profile));
            }
        }
    }, [dispatch, profile, recently]);

    document.title = `GHS | ${username}`;
    return (
        <>
            {profile && (
                <div className="container profile__container p-10">
                    <div className="row">
                        <div className="col-12 col-lg-4 flex items-center flex-column justify-center">
                            <img
                                src={profile.avatar_url}
                                className="w-72 rounded-full"
                                alt="profile"
                            />

                            <h1 className="h1 mt-4">{profile.name}</h1>
                            <h3 className="h5 mt-2 text-gray-400">{profile.login}</h3>
                        </div>
                        <div className="col-12 col-lg-8 h-32">
                            <ProfileTabs profile={profile} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
