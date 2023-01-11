import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { getAllMessages, getAllMessagesFailed, getAllMessagesSuccess, SaveMessage, SaveMessageFail, SaveMessageSuccess } from './message.actions';
import { SharedService } from '../shared.service';
import { ITableDetails } from '../common.interface';

@Injectable()

export class MessageEffects {

    //#region life cycle hooks

    constructor(
        private actions$: Actions,
        private sharedServices: SharedService,
        private snackBar: MatSnackBar) { }

    //#endregion

    //#region effects of actions

    addStudentInfo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SaveMessage),
            switchMap((action) => {
                return this.sharedServices.saveMessages(action.messageData).pipe(
                    map((activities) => {
                        console.log('activities: ', activities);
                        this.snackBar.open('Data saved succesfully', 'Fire-Base upadted', { duration: 1000 });
                        return SaveMessageSuccess({ message: '' });
                    }),
                    catchError((error) => {
                        return of(SaveMessageFail({ error }));
                    }));
            })));

    getAlllMessages$ = createEffect(() =>
        this.actions$.pipe(ofType(getAllMessages), mergeMap(() => {
            return this.sharedServices.getAllData().pipe(
                map((res: ITableDetails) => {
                    console.log('res-effects', res)
                    return getAllMessagesSuccess({ messages: res });
                }), catchError((error) => {
                    return of(getAllMessagesFailed({ error: error }));
                }));
        })));

    //#endregion

}
