import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMessageState } from './message.state';

/** Get dealership Feature Selector */
export const messageFeatureSelector = createFeatureSelector<IMessageState>('message');
/** Get current save status */

export const  showAllMessage= createSelector(messageFeatureSelector, (state) => state.message);



