import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from '../shared/shared.module';
import { StudentListComponent } from './pages/student-list/student-list.component';


@NgModule({
  declarations: [StudentComponent, StudentListComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
