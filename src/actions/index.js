import * as Types                   from '../contants/Action-Types';

export const AcAddTask = val => {
    return {
        type: Types.CHANGE_NOTIFY_ADD
    }
}

export const AcDismiss = val => {
    return {
        type: Types.HANDLE_DISMISS
    }
}