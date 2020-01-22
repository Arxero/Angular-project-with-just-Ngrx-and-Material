import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PeopleState } from '../reducers';

export const selectPeopleState = createFeatureSelector<PeopleState>('people');

export const selectPeople = createSelector(
  selectPeopleState,
  peopleState => peopleState.people
);
