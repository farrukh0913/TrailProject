
import { createAction, props } from '@ngrx/store';
import { ITableDetails } from '../common.interface';

//#region actions

/**
 * save action
 */
export const SaveMessage = createAction(
    '[NpaStat] GetNpaStatListTotal',
    props<{ messageData: ITableDetails }>()
);

/** save success */
export const SaveMessageSuccess = createAction(
    '[NpaStat] GetNpaStatListTotal Success',
    props<{ message: string }>()
);

/** save fail */
export const SaveMessageFail = createAction(
    '[NpaStat] GetNpaStatListTotal Failed',
    props<{ error: any }>()
);

/** all messages */
export const getAllMessages = createAction('[message data] loadMessages Information');

// all messages success
export const getAllMessagesSuccess = createAction(
    '[message data] loadMessages Success',
    props<{ messages: ITableDetails }>());


// all messages fail
export const getAllMessagesFailed = createAction(
    '[message data] loadMessages Failed',
    props<{ error: any }>());

    //#endregion