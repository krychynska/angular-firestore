import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectIsAuthenticated} from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated$: Observable<any>;

  constructor(private store: Store<any>) {

  }
  ngOnInit() {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }
}
