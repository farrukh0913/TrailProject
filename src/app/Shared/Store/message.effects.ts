import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { SharedServiceService } from '../shared-service.service';
import { getAllMessages, getAllMessagesFailed, getAllMessagesSuccess, SaveMessage, SaveMessageFail, SaveMessageSuccess } from './message.actions';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





@Injectable()


export class MessageEffects {

    //  config = new MdSnackBarConfig();
    constructor(
        private actions$: Actions,
        private sharedServices:SharedServiceService,
        private snackBar: MatSnackBar
    ) {}

AddStudentInfo$ = createEffect(() =>
this.actions$.pipe(
    ofType(SaveMessage),
    switchMap((action) => {
        // this.loaderService.showLoader();
        return this.sharedServices.saveMessages(action.messageData).pipe(
            map((activities) => {
                console.log('activities: ', activities);
                this.snackBar.open('Record Save Succesfully', 'Fire Base Upadted',{duration:1000});
                // this.loaderService.hideLoader();
                return SaveMessageSuccess({message:''});
            }),
            catchError((error) => {
                // this.loaderService.hideLoader();
                return of(SaveMessageFail({ error }));
            })
        );
    })
)
);


getAlllMessages$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getAllMessages),
            mergeMap(() => {
                return this.sharedServices.getAllData().pipe(
                    map((res) => {
                        console.log('res-effects', res)
                        return getAllMessagesSuccess({ messages: res });
                    }),
                    catchError((error) => {
                        return of(getAllMessagesFailed({ error: error }));
                    })
                )
            })
        )
    );

}
