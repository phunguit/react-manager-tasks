import * as Types from '../contants/Action-Types';

var defaultState = {
    type: null,
    isShow: false
};

const notify = (state = defaultState, action) => {
    switch(action.type) {
        case Types.CHANGE_NOTIFY_ADD:            
            state = {
                type: Types.CHANGE_NOTIFY_ADD,
                isShow: true
            }
            return {...state};
        
        case Types.HANDLE_DISMISS:
            state.isShow = false;
            return {...state};

        case Types.CHANGE_COMPLETED:
            state = {
                type: Types.CHANGE_COMPLETED,
                isShow: true
            }
            return {...state};

        default:
            return state;
    }
}
export default notify;