import './Recently.css'
import RecentlyProfile from './RecentlyProfile'

function Recently() {
    return (
        <div className="container mt-10 text-white">
            <p className="h3 text-gray-300">- Recently</p>

            <div className="container-fluid mt-2">
                <div className="row">
                    <RecentlyProfile />
                    <RecentlyProfile />
                </div>
            </div>
        </div>
    )
}

export default Recently
