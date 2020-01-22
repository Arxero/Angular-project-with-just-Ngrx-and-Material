import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PeopleState, Person } from '../reducers';
import { LoadPeoples, PeopleActionTypes, LoadPeoplesSuccess } from '../actions/people.actions';
import { defer, of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Injectable()
export class PeopleEffects {



  constructor(
    private actions$: Actions,
    private store: Store<PeopleState>) { }

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<LoadPeoples>(PeopleActionTypes.LoadPeoples),
    tap(() => {
      try {
        const people: Person[] = [
          {
            name: 'Maverick',
            age: 26,
          } as Person
        ];
        this.store.dispatch(new LoadPeoplesSuccess({ data: people }));
      } catch (error) {

      }
    })
  );
}
