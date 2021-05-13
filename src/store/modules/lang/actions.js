import Types from './types';

export const switchLangReq = (payload) => {
    return {
        payload,
        type: Types.SWITCH_LANG_REQ
    }
}

export const switchLangSuccess = (payload) => {
    return {
        payload,
        type: Types.SWITCH_LANG_SUCCESS
    }
}

export const switchLangFailure = (payload) => {
    return {
        payload,
        type: Types.SWITCH_LANG_FAILURE
    }
}