import './Suggest.css';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSuggest } from '../../features/suggest/suggestAction';
import SuggestProfile from './SuggestProfile';
import { useSelector } from 'react-redux';
import { selectAllSuggest } from '../../features/suggest/suggestSlice';

function Suggest() {
    const suggest = useSelector(selectAllSuggest);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(fetchSuggest());
    }, [dispatch])

    return (
        <div className="container mt-10 text-white">
            <p className="h3 text-gray-300">- Github recommended</p>

            <div className="container-fluid mt-2">
                <div className="row">
                    {
                        suggest.length > 0 && (
                            suggest.map((sug, index) => (
                                index < 6 && <SuggestProfile key={sug.node_id} avatar={sug.avatar_url} username={sug.login} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Suggest
