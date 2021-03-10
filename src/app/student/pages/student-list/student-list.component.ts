import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/http/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students$: Observable<Student[]>;
  student:Observable<Student>;
  displayedColumns: string[] = ["id", "firstName", "lastName", "birthYear", "class","delete"];

  constructor(private _studentService: StudentService, private _route: Router) { }

  ngOnInit(): void {
    this.students$ = this._studentService.get();
  }

  goToForm() {
    this._route.navigateByUrl('students-form');
  }

  deleteById(id) {
   this._studentService.delete(id).subscribe( () => this.students$ = this._studentService.get());
  }

  GoToFormUpdate(id) {
    this._route.navigateByUrl('students-form',id);
  }
}
