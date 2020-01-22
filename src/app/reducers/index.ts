import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { PeopleActions, PeopleActionTypes } from '../actions/people.actions';

export interface Person {
  name: string;
  age: number;
}

// this is where you put all you different states of ngrx
export interface State {
  people: PeopleState;
}

// and this is one particular state from many
export interface PeopleState {
  people: Person[];
}

export const reducers: ActionReducerMap<State> = {
  people: peopleReducer
};

export const initialPeopleState: PeopleState = {
  people: []
} as PeopleState;

export function peopleReducer(
  state = initialPeopleState,
  action: PeopleActions): PeopleState {
  switch (action.type) {
    case PeopleActionTypes.LoadPeoplesSuccess:
      return {
        ...state,
        people: action.payload.data
      } as any;
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
