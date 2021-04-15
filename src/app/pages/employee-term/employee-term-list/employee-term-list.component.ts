import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeTermElement } from 'src/app/model/EmployeeTermElement';
import { EmployeeTermService } from 'src/app/services/employee-term.service';

@Component({
  selector: 'app-employee-term-list',
  templateUrl: './employee-term-list.component.html',
  styleUrls: ['./employee-term-list.component.css']
})
export class EmployeeTermListComponent implements OnInit {

  auth_token;
  tenant_name;
  employeeTerms: EmployeeTermElement[];
  displayedColumns: string[] = ['position', 'name', 'dateOfJoining', 'dateOfLeaving', 'department', 'designation', 'operations'];

  dataSource;

  @Output() editInitFormList: EventEmitter<any> = new EventEmitter();
  constructor(private _employeeTermService: EmployeeTermService) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In classTimingSession List Component -----------------------------------");
    }
    this.listInit();
  }

  listInit() {
    this._employeeTermService.listAllEmployeeTerm(this.auth_token, this.tenant_name).subscribe(
      data => {
        console.log(data.data);
        this.employeeTerms = data.data;
        this.dataSource = new MatTableDataSource(this.employeeTerms);
      },
      error => {
        console.error(error);
      }
    );
  }

  editEmployeeTerm(id) {
    this.editInitFormList.emit(id);
  }

  deleteEmployeeTerm(employeeTerm) {
    this._employeeTermService.deleteEmployeeTerm(this.auth_token, this.tenant_name, employeeTerm).subscribe(
      data => {
        console.log(data);
        alert(data.message);
        this.listInit();
      },
      error => {
        console.error(error);
      }
    )
  }
}
