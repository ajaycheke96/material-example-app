import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(
    private http: HttpClient
  ) { }

  buildHeaders(auth_token, tenant_name) {
    return {
      "Authorization": `Bearer ${auth_token}`,
      "X-Tenant": tenant_name
    };
  }

  // list all
  getAllEnquirys(auth_token, tenant_name): Observable<any> {
    return this.http.get(`${baseUrl}/enquiry/listAllEnquiry`, {
      headers: this.buildHeaders(auth_token, tenant_name)
    })
  }

  // get one
  getOneEnquiryById(auth_token, tenant_name, enquiryId): Observable<any> {
    return this.http.get(`${baseUrl}/enquiry/${enquiryId}`, {
      headers: this.buildHeaders(auth_token, tenant_name)
    })
  }

  // delete
  deleteEnquiry(auth_token, tenant_name, enquiry): Observable<any> {
    return this.http.post(`${baseUrl}/enquiry/deleteEnquiry`, enquiry, {
      headers: this.buildHeaders(auth_token, tenant_name)
    })
  }

  // save
  saveEnquiry(auth_token, tenant_name, enquiry): Observable<any> {
    return this.http.post(`${baseUrl}/enquiry/saveEnquiry`, enquiry, {
      headers: this.buildHeaders(auth_token, tenant_name)
    })
  }

  // update
  updateEnquiry(auth_token, tenant_name, enquiry): Observable<any> {
    return this.http.post(`${baseUrl}/enquiry/updateEnquiry`, enquiry, {
      headers: this.buildHeaders(auth_token, tenant_name)
    })
  }
}
