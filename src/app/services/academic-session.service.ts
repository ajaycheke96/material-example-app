import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { AcademicSessionElement } from '../model/AcademicSessionElement';

@Injectable({
  providedIn: 'root'
})
export class AcademicSessionService {

  constructor(private http: HttpClient) { }

  // list All
  listAllAcademicSession(auth_token, tenant_name): Observable<any> {
    return this.http.get(`${baseUrl}/academicSession/listAllAcademicSessions`, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    })
  }

  // get By Id
  getAcademicSessionById(auth_token, tenant_name, id): Observable<any> {
    return this.http.get(`${baseUrl}/academicSession/${id}`, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    })
  }

  // save
  saveAcademicSession(auth_token, tenant_name, academicSessionForm): Observable<any> {

    // convert the form data into model class data
    let academicSession = {
      id: academicSessionForm.value.id,
      createdAt: academicSessionForm.value.createdAt,
      description: academicSessionForm.value.description,
      endDate: academicSessionForm.value.endDate,
      isDefault: academicSessionForm.value.isDefault,
      name: academicSessionForm.value.name,
      // options: academicSessionForm.value.options,
      startDate: academicSessionForm.value.startDate,
      updatedAt: academicSessionForm.value.updatedAt
    }
    // let academicSession: AcademicSessionElement = new AcademicSessionElement(
    //   academicSessionForm.value.id,
    //   academicSessionForm.value.createdAt,
    //   academicSessionForm.value.description,
    //   academicSessionForm.value.endDate,
    //   academicSessionForm.value.isDefault,
    //   academicSessionForm.value.name,
    //   academicSessionForm.value.options,
    //   academicSessionForm.value.startDate,
    //   academicSessionForm.value.updatedAt
    // )

    return this.http.post(`${baseUrl}/academicSession/saveAcademicSession`, academicSession, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    })
  }

  // update
  updateAcademicSession(auth_token, tenant_name, academicSessionForm): Observable<any> {

    // convert the form data into model class data
    let academicSession = {
      id: academicSessionForm.value.id,
      createdAt: academicSessionForm.value.createdAt,
      description: academicSessionForm.value.description,
      endDate: academicSessionForm.value.endDate,
      isDefault: academicSessionForm.value.isDefault,
      name: academicSessionForm.value.name,
      // options: academicSessionForm.value.options,
      startDate: academicSessionForm.value.startDate,
      updatedAt: academicSessionForm.value.updatedAt
    }
    // let academicSession: AcademicSessionElement = new AcademicSessionElement(
    //   academicSessionForm.value.id,
    //   academicSessionForm.value.createdAt,
    //   academicSessionForm.value.description,
    //   academicSessionForm.value.endDate,
    //   academicSessionForm.value.isDefault,
    //   academicSessionForm.value.name,
    //   academicSessionForm.value.options,
    //   academicSessionForm.value.startDate,
    //   academicSessionForm.value.updatedAt
    // )

    return this.http.post(`${baseUrl}/academicSession/updateAcademicSession`, academicSession, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    })
  }

  // delete
  deleteAcademicSession(auth_token, tenant_name, academicSession): Observable<any> {
    return this.http.post(`${baseUrl}/academicSession/deleteAcademicSession`, academicSession, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    })
  }
}


