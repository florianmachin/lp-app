import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../models/student';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentService {

  endpoint: string = environment.studentEndpoint;

  constructor(private _httpClient: HttpClient) {

  }

  get(): Observable<Student[]> {
    return this._httpClient.get<Student[]>(this.endpoint);
  }

  post(student: Student): Observable<Student> {
    return this._httpClient.post<Student>(this.endpoint, student);
  }
  delete(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.endpoint}/${id}`);
  }
  update(student: Student): Observable<Student> {
    return this._httpClient.put<Student>(`${this.endpoint}/${id}`, student);
  }
}
