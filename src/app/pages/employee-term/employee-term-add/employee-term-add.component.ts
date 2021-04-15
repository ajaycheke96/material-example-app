import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentElement } from 'src/app/model/DepartmentElement';
import { DesignationElement } from 'src/app/model/DesignationElement';
import { DepartmentService } from 'src/app/services/department.service';
import { DesignationService } from 'src/app/services/designation.service';
import { EmployeeTermService } from 'src/app/services/employee-term.service';

@Component({
  selector: 'app-employee-term-add',
  templateUrl: './employee-term-add.component.html',
  styleUrls: ['./employee-term-add.component.css']
})
export class EmployeeTermAddComponent implements OnInit {

  auth_token;
  tenant_name;
  employeeTerm: any;
  form: FormGroup;
  departments: DepartmentElement[];
  designations: DesignationElement[];

  constructor(
    private _employeeTermService: EmployeeTermService,
    private _departmentService: DepartmentService,
    private _designationService: DesignationService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In classTimingSession List Component -----------------------------------");
    }
    this.saveFormInit();
  }

  fetchDepartmentList() {
    this._departmentService.getAllDepartments(this.auth_token, this.tenant_name).subscribe(
      data => {
        this.departments = data.data;
        console.log(this.departments)
      },
      error => {
        console.error(error);
      }
    )
  }

  fetchDesignationList() {
    this._designationService.getDesignationList(this.auth_token, this.tenant_name).subscribe(
      data => {
        this.designations = data.data;
        console.log(this.designations)
      },
      error => {
        console.error(error);
      }
    )
  }

  saveFormInit() {
    this.fetchDesignationList();
    this.fetchDepartmentList()
    this.form = this._formBuilder.group({
      id: [''],
      dateOfJoining: [''],
      dateOfLeaving: [''],
      employeeId: [''],
      createdAt: [''],
      updatedAt: [''],
      employeeDesignations: this._formBuilder.array([])
    });
  }

  get employeeDesignations(): FormArray {
    return this.form.get('employeeDesignations') as FormArray;
  }

  newEmployeeDesignation(): FormGroup {
    return this._formBuilder.group({
      id: '',
      createdAt: '',
      dateEffective: '',
      dateEnd: '',
      updatedAt: '',
      departmentId: '',
      departmentName: '',
      designationId: '',
      designationName: ''
    }); // --one employeeDesignation form
  }

  addEmployeeDesignation() {
    this.employeeDesignations.push(this.newEmployeeDesignation());
    console.log(this.employeeDesignations);
  }

  removeEmployeeDesignation(i: number) {
    this.employeeDesignations.removeAt(i);
    console.log(this.employeeDesignations);
  }

  onSubmit() {
    console.log(this.form.value);
    this._employeeTermService.saveEmployeeTerm(this.auth_token, this.tenant_name, this.form).subscribe(
      data => {
        console.log(data);
        alert(data.message);
        this.saveFormInit();
      },
      error => {
        console.error(error);
      }
    );
  }

}
