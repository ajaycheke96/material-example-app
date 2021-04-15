import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeElement } from 'src/app/model/EmployeeElement';
import { StudentElement } from 'src/app/model/StudentElement';
import { EmployeeService } from 'src/app/services/employee.service';
import { StudentService } from 'src/app/services/student.service';
import { VisitorLogService } from 'src/app/services/visitor-log.service';

@Component({
  selector: 'app-visitor-log-add',
  templateUrl: './visitor-log-add.component.html',
  styleUrls: ['./visitor-log-add.component.css']
})
export class VisitorLogAddComponent implements OnInit {

  auth_token;
  tenant_name;

  visitorLogForm: FormGroup;
  employeeForm: FormGroup;
  studentForm: FormGroup;
  visitingPurposeForm: FormGroup;

  students: StudentElement[];
  employees: EmployeeElement[];

  constructor(
    private _visitorLogService: VisitorLogService,
    private _employeeService: EmployeeService,
    private _studentService: StudentService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In classTimingSession List Component -----------------------------------");
    }
    this.initForm();
  }

  initForm() {
    // this.fetchAllStudents();
    this.fetchAllEmployees();
    this.employeeForm = this._fb.group({
      id: '',
      firstName: '',
      lastName: ''
    })

    this.studentForm = this._fb.group({
      id: '',
      firstName: '',
      lastName: ''
    })

    this.visitingPurposeForm = this._fb.group({
      id: '',
      createdAt: '',
      description: ['', Validators.required],
      name: ['', Validators.required],
      options: '',
      updatedAt: ''
    })

    this.visitorLogForm = this._fb.group({
      id: '',
      address: ['', Validators.required],
      companyName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      createdAt: '',
      dateOfVisit: ['', Validators.required],
      entryTime: '',
      exitTime: '',
      name: ['', Validators.required],
      options: '',
      relationWithStudent: ['', Validators.required],
      remarks: '',
      type: ['', Validators.required],
      updatedAt: '',
      uploadToken: '',
      uuid: '',
      visitorCount: ['', Validators.required],
      employee: this.employeeForm,
      student: this.studentForm,
      visitingPurpos: this.visitingPurposeForm
    });
  }

  fetchAllEmployees() {
    this._employeeService.getAllEmployees(this.auth_token, this.tenant_name).subscribe(
      data => {
        console.log(data.data);
        this.employees = data.data;
      },
      error => {
        console.error(error);
      }
    )
  }

  // fetchAllStudents() {
  //   this._studentService.getAllStudents(this.auth_token, this.tenant_name).subscribe(
  //     data => {
  //       console.log(data.data);
  //       this.students = data.data;
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   )
  // }

  onSubmit() {
    console.log(this.visitorLogForm.value)
    this._visitorLogService.saveVisitorLog(this.auth_token, this.tenant_name, this.visitorLogForm.value).subscribe(
      data => {
        alert(data.message)
        this.initForm()
      },
      error => {
        console.error(error);
      }
    )
  }

}
