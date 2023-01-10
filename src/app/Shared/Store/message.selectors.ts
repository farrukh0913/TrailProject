import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMessageState } from './message.state';

/** Get dealership Feature Selector */
export const messageFeatureSelector = createFeatureSelector<IMessageState>('dwl');
/** Get current save status */

export const  showallMessage= createSelector(messageFeatureSelector, (state) => state.message);



