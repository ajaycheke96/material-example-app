import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { EmployeeTermElement } from '../model/EmployeeTermElement';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTermService {

  constructor(private http: HttpClient) { }

  listAllEmployeeTerm(auth_token, tenant_name): Observable<any> {
    return this.http.get(`${baseUrl}/employeeTerm/listAllEmployeeTerm`, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    });
  }

  getEmployeeTermById(auth_token, tenant_name, id): Observable<any> {
    return this.http.get(`${baseUrl}/employeeTerm/${id}`, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    });
  }

  saveEmployeeTerm(auth_token, tenant_name, employeeTermForm: FormGroup): Observable<any> {
    let employeeTerm = this.initClassElementFromFormElement(employeeTermForm);
    return this.http.post(`${baseUrl}/employeeTerm/saveEmployeeTerm`, employeeTerm, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    });
  }

  updateEmployeeTerm(auth_token, tenant_name, employeeTermForm: FormGroup): Observable<any> {
    let employeeTerm = this.initClassElementFromFormElement(employeeTermForm);
    return this.http.post(`${baseUrl}/employeeTerm/updateEmployeeTerm`, employeeTerm, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    });
  }

  private initClassElementFromFormElement(employeeTermForm: FormGroup): any {
    console.log("initClassElementFromFormElement Input : ");
    console.log(employeeTermForm);

    let employeeDesignations = []
    employeeTermForm.value.employeeDesignations.map(
      employeeDesignation => {
        let empDesignation = {
          id: employeeDesignation.id,
          createdAt: employeeDesignation.createdAt,
          dateEffective: employeeDesignation.dateEffective,
          dateEnd: employeeDesignation.dateEnd,
          updatedAt: employeeDesignation.updatedAt,
          department: {
            id: employeeDesignation.departmentId,
            name: employeeDesignation.departmentName
          },
          designation: {
            id: employeeDesignation.designationId,
            name: employeeDesignation.designationName
          }
        }
        employeeDesignations.push(empDesignation);
      }
    )

    console.log(employeeDesignations);

    let employeeTerm = {
      id: employeeTermForm.value.id,
      createdAt: employeeTermForm.value.createdAt, //2021-03-04 T 16:58:42,
      dateOfJoining: employeeTermForm.value.dateOfJoining, //2021-01-27,
      dateOfLeaving: employeeTermForm.value.dateOfLeaving, //2021-01-27,
      joiningRemarks: employeeTermForm.value.joiningRemarks,
      leavingRemarks: employeeTermForm.value.leavingRemarks,
      options: employeeTermForm.value.options,
      updatedAt: employeeTermForm.value.updatedAt, //2021-03-04 T 17:01:46,
      uploadToken: employeeTermForm.value.uploadToken,
      employeeDesignations: employeeDesignations,
      employee: {
        // <id> : employeeTermForm.value.employee<Id><objectNumber>
        id: employeeTermForm.value.employeeId
      }
    }

    console.log("initClassElementFromFormElement Output : ");
    console.log(employeeTerm);

    return employeeTerm;
  }

  deleteEmployeeTerm(auth_token, tenant_name, employeeTerm): Observable<any> {
    return this.http.post(`${baseUrl}/employeeTerm/deleteEmployeeTerm`, employeeTerm, {
      headers: {
        "Authorization": `Bearer ${auth_token}`,
        "X-Tenant": tenant_name
      }
    });
  }
}
