import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultiesComponent } from './faculties.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../shared/guards/auth.guard';
import {RolesGuard} from '../shared/guards/roles.guard';

const ROUTES = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FacultiesComponent,
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
  declarations: [FacultiesComponent]
})
export class FacultiesModule { }
