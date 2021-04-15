import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { StudentPayload } from '../payload/StudentPayload';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStudents(auth_token, tenant_name): Observable<StudentPayload> {
    return this.http.get<StudentPayload>(`${baseUrl}/student/listAllStudent`, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    })
  }
}
