import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultiesComponent } from './faculties.component';
import {RouterModule} from '@angular/router';

const ROUTES = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FacultiesComponent,
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
