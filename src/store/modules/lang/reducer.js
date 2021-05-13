import Types from './types';

const INITIAL_STATE = {
    lang: 'en',
    loading: false,
    error: false,
};

const langReducer = (state = INITIAL_STATE, action) => {
    // console.log(action)
    switch(action.type){
        case Types.SWITCH_LANG_REQ:
            return {
                ...state,
                lang: action.payload,
                loading: true,
                error: false
            };

        case Types.SWITCH_LANG_SUCCESS:
            return {
                ...state,
                lang: action.payload,
                loading: false,
                error: false
            };

        case Types.SWITCH_LANG_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state
    }
};

export default langReducer;