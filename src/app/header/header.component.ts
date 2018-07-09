import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {selectUsername} from '../reducers';
import {Store} from '@ngrx/store';
import {DoLogout} from '../login/login.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username$: Observable<any>;

  constructor(private store: Store<any>) {

  }
  ngOnInit() {
    this.username$ = this.store.select(selectUsername);
  }

  doLogout() {
    this.store.dispatch(new DoLogout());
  }

}
