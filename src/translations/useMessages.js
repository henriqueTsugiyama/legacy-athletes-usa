import * as languages from './messages';

const useMessages = ()=> {
    const lang = localStorage.getItem('lang');
    const getMessage = () => {
        // console.log(languages[lang])
        return lang !== 'en' ? languages['spa'] : languages['en'];
    }
    return { getMessage };
};

export {useMessages};