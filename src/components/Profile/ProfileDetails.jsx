import moment from 'moment';

function ProfileDetails({profile}) {

    return (
        <div className="w-full shadow rounded container-fluid p-3" style={{minHeight: "300px", border: "1px solid rgba(255,255,255,0.3)"}}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <p>Bio : {profile.bio}</p>
                </div>

                <div className="col-12 col-md-6">
                    <p>Joined : {moment(profile.created_at).from()}</p>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-md-6">
                    <p>Node ID : {profile.node_id}</p>
                </div>

                <div className="col-12 col-md-6">
                    <p>ID : {profile.id}</p>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-md-6">
                    <p>Location : {profile.location}</p>
                </div>

                <div className="col-12 col-md-6">
                    <p>Email : {profile.email}</p>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-md-6">
                    <p>Last Update : {moment(profile.update_at).from()}</p>
                </div>

                <div className="col-12 col-md-6">
                    <p>Twitter Username : {profile.twitter_username}</p>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-md-6">
                    <p>Type : {profile.type}</p>
                </div>

                <div className="col-12 col-md-6">
                    <p>Admin : {profile.site_admin ? "Yes" : "No"}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails
