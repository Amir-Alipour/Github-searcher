import "./Profile.css";
import { useEffect, useLayoutEffect, useState } from "react";
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
    const status = useSelector(state => state.profile.status);

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
            {profile && status === "success" && (
                <div className="container profile__container p-10">
                    <div className="row">
                        <div className="col-12 col-lg-4 flex items-center flex-column justify-center">
                            <div className="relative">
                                <img
                                    src={profile.avatar_url}
                                    className="w-72 rounded-full"
                                    alt={`${profile.login} Github Profile`}
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.4)",
                                    }}
                                />

                                <div
                                    className="absolute w-10 h-10 shadow right-4 bottom-6 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: "#2d333b" }}
                                >
                                    <a
                                        href={profile.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transform rotate-45 text-gray-400"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <h1 className="h1 mt-4">{profile.name}</h1>
                            <h3 className="h5 mt-2 text-gray-400">
                                {profile.login}
                            </h3>

                            <div className="flex text-gray-500">
                                <p>{profile.followers} followers</p>
                                <p className="ml-3">{profile.following} following</p>
                            </div>
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
