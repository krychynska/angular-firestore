import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../shared/guards/auth.guard';
import {RolesGuard} from '../shared/guards/roles.guard';

const ROUTES = [
  {
    path: '',
    children: [
      {
        path: '',
        component: StudentsComponent,
        canActivate: [AuthGuard, RolesGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [StudentsComponent]
})
export class StudentsModule { }
