import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import {RouterModule} from '@angular/router';

const ROUTES = [
  {
    path: '',
    children: [
      {
        path: '',
        component: StudentsComponent
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
