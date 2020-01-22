import { Observable } from 'rxjs';
import { LoadPeoples } from './actions/people.actions';
import { PeopleState, Person } from './reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectPeople } from './selectors/people.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people$: Observable<Person[]>;


  constructor(private store: Store<PeopleState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(new LoadPeoples());

    this.people$ = this.store.pipe(
      select(selectPeople)
    );

  }
}
