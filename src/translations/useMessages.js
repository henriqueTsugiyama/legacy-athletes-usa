import * as languages from './messages';
import { useSelector } from 'react-redux';
const useMessages = ()=> {
    const { langReducer } = useSelector(state => state);

    const getMessage = () => {
        return langReducer.lang !== 'en' ? languages['spa'] : languages['en'];
    }
    return { getMessage };
};

export {useMessages};