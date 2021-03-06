import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiseases } from '../../../store/diseases/diseaseSlice';
import InfoCard from "./components/info-card/InfoCard";

function Feed() {
    const dispatch = useDispatch();

    const diseases = useSelector(state => {
        return state.diseases.diseases;
    });

    useEffect(() => {
        dispatch(fetchDiseases(0));
    }, []);

    return (
        <div className="feed-box">
            {
                diseases.map(disease => (
                    <div key={disease.id} className="feed-content">
                        <InfoCard disease={disease} />
                    </div>)
                )
            }
        </div>
    )
}

export default Feed;