import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AcademicSessionService } from "src/app/services/academic-session.service";

@Component({
  selector: 'app-academic-session-add',
  templateUrl: './academic-session-add.component.html',
  styleUrls: ['./academic-session-add.component.css']
})
export class AcademicSessionAddComponent implements OnInit {

  auth_token;
  tenant_name;
  academicSessionForm: FormGroup;

  constructor(private _academicSessionService: AcademicSessionService) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In Article List Component -----------------------------------");
    }
    this.initForm();
  }

  initForm() {
    this.academicSessionForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      isDefault: new FormControl(''),
      createdAt: new FormControl(''),
      updatedAt: new FormControl('')
    });
  }

  saveAcademicSession() {
    this._academicSessionService.saveAcademicSession(this.auth_token, this.tenant_name, this.academicSessionForm).subscribe(
      data => {
        console.log(data);
        alert(data.message);
        this.initForm();
      },
      error => {
        console.error(error);
      }
    );
  }
}
