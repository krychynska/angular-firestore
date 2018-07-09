import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Store} from '@ngrx/store';
import {GetPermissions, PermissionSelected} from '../login/login.actions';
import {Observable} from 'rxjs';
import {Role} from '../shared/models/role';
import {selectPermissions} from '../reducers';

@Component({
  selector: 'app-select-permission',
  templateUrl: './select-permission.component.html',
  styleUrls: ['./select-permission.component.scss']
})
export class SelectPermissionComponent implements OnInit {
  permissions$: Observable<Role[]>;

  constructor(public dialogRef: MatDialogRef<SelectPermissionComponent>,
              private store: Store<any>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
   // this.store.dispatch(new GetPermissions());
   this.permissions$ = this.store.select(selectPermissions);
  }

  selectPermission(role) {
    console.log(role);
    this.store.dispatch(new PermissionSelected({selectedPermission: role}));
    this.dialogRef.close();
  }
}
