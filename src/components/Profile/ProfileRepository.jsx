import { useLayoutEffect, useState } from "react"
import Api from '../../utils/AxiosConfig';

function ProfileRepository({username}) {
    const [repos, setRepos] = useState();

    useLayoutEffect(() => {
        Api.get(`/users/${username}/repos`).then(res => setRepos(res));
    }, [username
    ])

    return (
        <div>
            
        </div>
    )
}

export default ProfileRepository
