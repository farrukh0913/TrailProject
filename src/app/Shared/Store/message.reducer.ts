import { createReducer, on, Action } from '@ngrx/store';
import { getAllMessages, getAllMessagesFailed, getAllMessagesSuccess, SaveMessage, SaveMessageFail, SaveMessageSuccess } from './message.actions';
import { IMessageState, initialMessageState } from './message.state';




const createMessageReducer = createReducer(
    initialMessageState,


    /** Get GetNpaStatListTotal for dealership tab list */
    on(SaveMessage, (state) => ({
        ...state,
        saveSuccess: null,
        inProgress: true,
    })),

    /** Triggers when Get GetNpaStatListTotal loaded */
    on(SaveMessageSuccess, (state, { message }) => {
        return {
            ...state,
            message: message,
            saveSuccess: true,
            inProgress: false,
        };
    }),

    /** Triggers when GetNpaStatListTotal fails */
    on(SaveMessageFail, (state, { error }) => ({
        ...state,
        message: null,
        saveSuccess: false,
        inProgress: false,
    })),




       /** Get GetNpaStatListTotal for dealership tab list */
       on(getAllMessages, (state) => ({
        ...state,
        saveSuccess: null,
        inProgress: true,
    })),

    /** Triggers when Get GetNpaStatListTotal loaded */
    on(getAllMessagesSuccess, (state, { messages }) => {
        return {
            ...state,
            message: messages,
            saveSuccess: true,
            inProgress: false,
        };
    }),

    /** Triggers when GetNpaStatListTotal fails */
    on(getAllMessagesFailed, (state, { error }) => ({
        ...state,
        message: null,
        saveSuccess: false,
        inProgress: false,
    })),





);

export function messageReducer(state: IMessageState = initialMessageState, action: Action) {
    return createMessageReducer(state, action);
}
