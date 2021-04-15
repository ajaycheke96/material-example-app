import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DepartmentElement } from 'src/app/model/DepartmentElement';
import { DesignationElement } from 'src/app/model/DesignationElement';
import { DepartmentService } from 'src/app/services/department.service';
import { DesignationService } from 'src/app/services/designation.service';
import { EmployeeTermService } from 'src/app/services/employee-term.service';

@Component({
  selector: 'app-employee-term-edit',
  templateUrl: './employee-term-edit.component.html',
  styleUrls: ['./employee-term-edit.component.css']
})
export class EmployeeTermEditComponent implements OnInit {

  auth_token;
  tenant_name;
  employeeTerm: any;
  departments: DepartmentElement[];
  designations: DesignationElement[];
  form: FormGroup;

  @Input() employeeTermId;
  @Output() sendMessageToListFromEdit: EventEmitter<any> = new EventEmitter();
  constructor(
    private _employeeTermService: EmployeeTermService,
    private _designationService: DesignationService,
    private _departmentService: DepartmentService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In classTimingSession List Component -----------------------------------");
    }
    this.editInit();
  }

  editInit() {
    console.log(this.employeeTermId);
    this._employeeTermService.getEmployeeTermById(this.auth_token, this.tenant_name, this.employeeTermId).subscribe(
      data => {
        this.employeeTerm = data.data;
        console.log(this.employeeTerm);
        this.fetchDepartmentList();
        this.fetchDesignationList();
        this.buildFormGroup(this.employeeTerm);
      },
      error => {
        console.error(error);
      }
    );
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

  buildFormGroup(employeeTermElement) {

    console.log(employeeTermElement.employeeDesignations);

    // this.employeeDesignations = this._formBuilder.array(
    //   employeeTermElement.employeeDesignations.map(
    //     employeeDesignation => this._formBuilder.group({
    //       id: [employeeDesignation.id],
    //       createdAt: [employeeDesignation.createdAt],
    //       dateEffective: [employeeDesignation.dateEffective],
    //       dateEnd: [employeeDesignation.dateEnd],
    //       updatedAt: [employeeDesignation.updatedAt],
    //       departmentId: [employeeDesignation.department.id],
    //       departmentName: [employeeDesignation.department.name],
    //       designationId: [employeeDesignation.designation.id],
    //       designationName: [employeeDesignation.designation.name]
    //     }) // --one employeeDesignation form
    //   )//end map
    // )// end employeeDesignations

    this.form = this._formBuilder.group({
      id: [employeeTermElement.id],
      dateOfJoining: [employeeTermElement.dateOfJoining],
      dateOfLeaving: [employeeTermElement.dateOfLeaving],
      employeeId: [employeeTermElement.employee.id],
      createdAt: [employeeTermElement.createdAt],
      updatedAt: [employeeTermElement.updatedAt],
      employeeDesignations: this._formBuilder.array(
        employeeTermElement.employeeDesignations.map(
          employeeDesignation => this._formBuilder.group({
            id: [employeeDesignation.id],
            createdAt: [employeeDesignation.createdAt],
            dateEffective: [employeeDesignation.dateEffective],
            dateEnd: [employeeDesignation.dateEnd],
            updatedAt: [employeeDesignation.updatedAt],
            departmentId: [employeeDesignation.department.id],
            departmentName: [employeeDesignation.department.name],
            designationId: [employeeDesignation.designation.id],
            designationName: [employeeDesignation.designation.name]
          }) // --one employeeDesignation form
        )//end map
      )// end employeeDesignations
    })
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
    console.log(this.form);
    this._employeeTermService.updateEmployeeTerm(this.auth_token, this.tenant_name, this.form).subscribe(
      data => {
        console.log(data);
        this.sendMessageToListFromEdit.emit(data.message);
      },
      error => {
        console.error(error);
      }
    );
  }

}
