import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassTimingSessionService {

  constructor(private http: HttpClient) { }

  // save classTimingSession
  saveClassTimingSession(auth_token, tenant_name, classTimingSessionFormData): Observable<any> {
    let classTimingSessionElement = {
      id: classTimingSessionFormData.value.id,
      createdAt: classTimingSessionFormData.value.createdAt,
      description: classTimingSessionFormData.value.description,
      isABreak: classTimingSessionFormData.value.isABreak,
      name: classTimingSessionFormData.value.name,
      end: classTimingSessionFormData.value.end,
      start: classTimingSessionFormData.value.start,
      updatedAt: classTimingSessionFormData.value.updatedAt,
      uuid: classTimingSessionFormData.value.uuid,
      classTiming: {
        id: classTimingSessionFormData.value.classTimingId,
        createdAt: classTimingSessionFormData.value.classTimingCreatedAt,
        description: classTimingSessionFormData.value.classTimingDescription,
        name: classTimingSessionFormData.value.classTimingName,
        updatedAt: classTimingSessionFormData.value.classTimingUpdatedAt,
        uuid: classTimingSessionFormData.value.classTimingUuid,
        academicSession: {
          id: classTimingSessionFormData.value.academicSessionId,
        }
      }
    };
    return this.http.post(`${baseUrl}/classTimingSession/saveClassTimingSession`, classTimingSessionElement, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": tenant_name
      }
    });
  }

  // Edit ClassTimingSession
  editClassTimingSession(auth_token, tenant_name, classTimingSessionFormData): Observable<any> {
    let classTimingSessionElement = {
      id: classTimingSessionFormData.value.id,
      createdAt: classTimingSessionFormData.value.createdAt,
      description: classTimingSessionFormData.value.description,
      isABreak: classTimingSessionFormData.value.isABreak,
      name: classTimingSessionFormData.value.name,
      end: classTimingSessionFormData.value.end,
      start: classTimingSessionFormData.value.start,
      updatedAt: classTimingSessionFormData.value.updatedAt,
      uuid: classTimingSessionFormData.value.uuid,
      classTiming: {
        id: classTimingSessionFormData.value.classTimingId,
        createdAt: classTimingSessionFormData.value.classTimingCreatedAt,
        description: classTimingSessionFormData.value.classTimingDescription,
        name: classTimingSessionFormData.value.classTimingName,
        updatedAt: classTimingSessionFormData.value.classTimingUpdatedAt,
        uuid: classTimingSessionFormData.value.classTimingUuid,
        academicSession: {
          id: classTimingSessionFormData.value.academicSessionId
        }
      }
    };
    return this.http.post(`${baseUrl}/classTimingSession/updateClassTimingSession`, classTimingSessionElement, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": tenant_name
      }
    });
  }

  // Fetch all classTimingSessions
  listAllClassTimingSessions(auth_token, tenant_name): Observable<any> {
    return this.http.get(`${baseUrl}/classTimingSession/listAllClassTimingSessions`, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": tenant_name
      }
    });
  }

  // fetch classTimingSession by Id
  getClassTimingSessionById(auth_token, tenant_name, classTimingSessionId): Observable<any> {
    return this.http.get(`${baseUrl}/classTimingSession/${classTimingSessionId}`, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": tenant_name
      }
    });
  }

  // Delete classTimingSession
  deleteClassTimingSession(auth_token, tenant_name, classTimingSession): Observable<any> {
    return this.http.post(`${baseUrl}/classTimingSession/deleteClassTimingSession`, classTimingSession, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": tenant_name
      }
    });
  }
}
