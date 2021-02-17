import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../core/models/student';
import { StudentService } from '../core/services/http/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students$: Observable<Student[]>;

  constructor() {

   }

  ngOnInit(): void {



  }


}
