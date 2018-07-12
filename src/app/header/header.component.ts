import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {selectUsername} from '../reducers';
import {Store} from '@ngrx/store';
import {DoLogout} from '../login/login.actions';
import {Router, UrlTree} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username$: Observable<any>;

  constructor(private store: Store<any>, private router: Router) {

  }
  ngOnInit() {
    this.username$ = this.store.select(selectUsername);
  }

  private buildUrlTree(url: string): UrlTree {
    const urlTree = this.router.parseUrl(url);
    const tempUrlTree = this.router.parseUrl(this.router.url);
    if (tempUrlTree.queryParamMap.has('role')) {
      urlTree.queryParams['role'] = tempUrlTree.queryParams['role'];
    }
    return urlTree;
  }

  goToHome() {
    this.router.navigateByUrl(this.buildUrlTree(''));
  }

  goToFaculties() {
    this.router.navigateByUrl(this.buildUrlTree('faculties'));
  }
  goToStudents() {
    this.router.navigateByUrl(this.buildUrlTree('students'));
  }

  doLogout() {
    this.store.dispatch(new DoLogout({url: null}));
  }

}
