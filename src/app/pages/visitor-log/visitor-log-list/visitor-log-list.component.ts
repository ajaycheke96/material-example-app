import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VisitorLogElement } from 'src/app/model/VisitorLogElement';
import { VisitorLogService } from 'src/app/services/visitor-log.service';

@Component({
  selector: 'app-visitor-log-list',
  templateUrl: './visitor-log-list.component.html',
  styleUrls: ['./visitor-log-list.component.css']
})
export class VisitorLogListComponent implements OnInit {

  auth_token;
  tenant_name;
  visitorLogs: VisitorLogElement[];
  displayedColumns: string[] = ['position', 'name', 'companyName', 'dateOfVisit', 'employeeName', 'studentName', 'studentStandard', 'operations'];

  dataSource;

  @Output() showEdit: EventEmitter<any> = new EventEmitter();
  constructor(
    private _visitorLogService: VisitorLogService
  ) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In classTimingSession List Component -----------------------------------");
    }
    this.initList();
  }

  initList() {
    console.log("Init list");
    this._visitorLogService.getAllVisitorLogs(this.auth_token, this.tenant_name).subscribe(
      data => {
        console.log(data.data);
        this.dataSource = new MatTableDataSource(data.data);
      },
      error => {
        console.error(error);
      }
    )
  }

  editVisitorLog(id) {
    console.log(id);
    this.showEdit.emit(id);
  }

  deleteVisitorLog(visitorLog) {
    console.log(visitorLog);
    this._visitorLogService.deleteVisitorLog(this.auth_token, this.tenant_name, visitorLog).subscribe(
      data => {
        alert(data.message);
        this.initList();
      },
      error => {
        console.error(error);
      }
    )
  }

}
