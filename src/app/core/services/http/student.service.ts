import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../models/student';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService {

  constructor(private _httpClient: HttpClient) {

   }




   get(): Observable<Student[]>{
     return this._httpClient.get<Student[]>("http://localhost:3000/students");
   }
}
