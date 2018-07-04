import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {RolesGuard} from './shared/guards/roles.guard';
const routes: Routes = [
  {
    path: 'faculties',
    loadChildren: './faculties/faculties.module#FacultiesModule',
    canLoad: [AuthGuard, RolesGuard]
  },
  {
    path: 'students',
    loadChildren: './students/students.module#StudentsModule',
    canLoad: [AuthGuard, RolesGuard]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard, RolesGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
