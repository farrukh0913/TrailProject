import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMessageState } from './message.state';

//#region selectors

/** message selector */
export const messageFeatureSelector = createFeatureSelector<IMessageState>('message');
/** Get current save status */

/** show all messages selector */
export const showAllMessage = createSelector(messageFeatureSelector, (state) => state.message);

//#endregion

