import { Action } from '@ngrx/store';

export enum PeopleActionTypes {
  LoadPeoples = '[People] Load Peoples',
  LoadPeoplesSuccess = '[People] Load Peoples Success',
  LoadPeoplesFailure = '[People] Load Peoples Failure',
}

export class LoadPeoples implements Action {
  readonly type = PeopleActionTypes.LoadPeoples;
}

export class LoadPeoplesSuccess implements Action {
  readonly type = PeopleActionTypes.LoadPeoplesSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadPeoplesFailure implements Action {
  readonly type = PeopleActionTypes.LoadPeoplesFailure;
  constructor(public payload: { error: any }) { }
}

export type PeopleActions = LoadPeoples | LoadPeoplesSuccess | LoadPeoplesFailure;

