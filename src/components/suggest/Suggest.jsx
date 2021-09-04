import './Suggest.css';
import SuggestProfile from './SuggestProfile';

function Suggest() {
    return (
        <div className="container mt-10 text-white">
            <p className="h3 text-gray-300">- Github recommended</p>

            <div className="container-fluid mt-2">
                <div className="row">
                    <SuggestProfile />
                    <SuggestProfile />
                </div>
            </div>
        </div>
    )
}

export default Suggest
