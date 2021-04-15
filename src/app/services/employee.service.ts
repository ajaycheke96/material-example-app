import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployees(auth_token, tenant_name): Observable<any> {
    console.log(auth_token + ", " + tenant_name);
    return this.http.get(`${baseUrl}/employee/listAllEmployee`, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    })
  }
}
