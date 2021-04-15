import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AcademicSessionElement } from 'src/app/model/AcademicSessionElement';
import { AcademicSessionService } from 'src/app/services/academic-session.service';

@Component({
  selector: 'app-academic-session-list',
  templateUrl: './academic-session-list.component.html',
  styleUrls: ['./academic-session-list.component.css']
})
export class AcademicSessionListComponent implements OnInit {

  auth_token;
  tenant_name;
  academicSessionList: AcademicSessionElement[];
  displayedColumns: string[] = ['position', 'name', 'description', 'isDefault', 'startDate', 'endDate', 'operations'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource;

  @Output() sendAcademicSessionId: EventEmitter<any> = new EventEmitter();
  constructor(private _academicSessionService: AcademicSessionService) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In Article List Component -----------------------------------");
    }
    this.fetchAcademicSessionList();
  }

  fetchAcademicSessionList() {
    this._academicSessionService.listAllAcademicSession(this.auth_token, this.tenant_name).subscribe(
      data => {
        this.academicSessionList = data.data;
      },
      error => {
        console.error(error);
      }
    );
  }

  editAcademicSession(id) {
    console.log(id);
    this.sendAcademicSessionId.emit(id);
  }

  deleteAcademicSession(academicSession) {
    console.log(academicSession);
    this._academicSessionService.deleteAcademicSession(this.auth_token, this.tenant_name, academicSession).subscribe(
      data => {
        console.log(data.message);
        alert(data.message);
        this.fetchAcademicSessionList();
      },
      error => {
        console.error(error);
      }
    );
  }

}
