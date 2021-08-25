import { useDispatch } from 'react-redux';
import actionCreators from '../actions';

export default function useActions() {
    const dispatch = useDispatch();

    const setupProfile = (name, gender) =>
        dispatch(actionCreators.setupProfile(name, gender));

    return { setupProfile };
}
