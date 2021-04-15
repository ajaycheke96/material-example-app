import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { ClassTeacherElement } from '../model/ClassTeacherElement';

@Injectable({
  providedIn: 'root'
})
export class ClassTeacherService {

  constructor(private http: HttpClient) { }

  listAllClassTeacher(auth_token, tenant_name): Observable<any> {
    return this.http.get(`${baseUrl}/classTeacher/listAllClassTeacher`, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    });
  }

  // get one
  getClassTeacherById(auth_token, tenant_name, classTeacherId): Observable<any> {
    return this.http.get(`${baseUrl}/classTeacher/${classTeacherId}`, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    });
  }

  // save
  saveClassTeacher(auth_token, tenant_name, classTeacherForm): Observable<any> {
    return this.http.post(`${baseUrl}/classTeacher/saveClassTeacher`, classTeacherForm, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    });
  }

  updateClassTeacher(auth_token, tenant_name, classTeacherForm): Observable<any> {
    return this.http.post(`${baseUrl}/classTeacher/updateClassTeacher`, classTeacherForm, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    });
  }

  // delete
  deleteClassTeacher(auth_token, tenant_name, classTeacher: ClassTeacherElement): Observable<any> {
    return this.http.post(`${baseUrl}/classTeacher/deleteClassTeacher`, classTeacher, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    });
  }
}
