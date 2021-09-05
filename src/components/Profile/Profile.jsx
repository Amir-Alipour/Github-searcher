import { useParams } from "react-router"

function Profile() {
    const params = useParams();

    
    document.title = `GHS | ${params.username}`
    return (
        <div>
            
        </div>
    )
}

export default Profile
