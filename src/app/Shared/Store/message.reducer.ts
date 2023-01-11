import { createReducer, on, Action } from '@ngrx/store';
import { getAllMessages, getAllMessagesFailed, getAllMessagesSuccess, SaveMessage, SaveMessageFail, SaveMessageSuccess } from './message.actions';
import { IMessageState, initialMessageState } from './message.state';

// reducer
const createMessageReducer = createReducer(
    initialMessageState,

    /** save message */
    on(SaveMessage, (state) => ({
        ...state,
        saveSuccess: null,
        inProgress: true,
    })),

    /** on success */
    on(SaveMessageSuccess, (state, { message }) => {
        return {
            ...state,
            message: message,
            saveSuccess: true,
            inProgress: false,
        };
    }),

    /** on fail */
    on(SaveMessageFail, (state, { error }) => ({
        ...state,
        message: null,
        saveSuccess: false,
        inProgress: false,
    })),

    /** all messages */
    on(getAllMessages, (state) => ({
        ...state,
        saveSuccess: null,
        inProgress: true,
    })),

    /** all message success */
    on(getAllMessagesSuccess, (state, { messages }) => {
        return {
            ...state,
            message: messages,
            saveSuccess: true,
            inProgress: false,
        };
    }),

    /** all messages failed */
    on(getAllMessagesFailed, (state, { error }) => ({
        ...state,
        message: null,
        saveSuccess: false,
        inProgress: false,
    })));

export function messageReducer(state: IMessageState = initialMessageState, action: Action) {
    return createMessageReducer(state, action);
}
