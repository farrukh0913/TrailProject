
import { createAction, props } from '@ngrx/store';

/**
 * @method Creates action for handling GetNpaStatListTotal Request
 * @success GetNpaStatListTotalSucess
 * @fail GetNpaStatListTotalFail
 */
export const SaveMessage = createAction(
    '[NpaStat] GetNpaStatListTotal',
    props<{ messageData: any }>()
);

/** Creates action for handling GetNpaStatListTotal success */
export const SaveMessageSuccess = createAction(
    '[NpaStat] GetNpaStatListTotal Success',
    props<{ message: any }>()
);

/** Creates action for handling GetNpaStatListTotal failure */
export const SaveMessageFail = createAction(
    '[NpaStat] GetNpaStatListTotal Failed',
    props<{ error: any }>()
);


export const getAllMessages = createAction('[message data] loadMessages Information');

export const getAllMessagesSuccess = createAction(
    '[message data] loadMessages Success',
    props<{ messages: any }>());

export const getAllMessagesFailed = createAction(
    '[message data] loadMessages Failed',
    props<{ error: any }>());