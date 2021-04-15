import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ClassTimingSessionElement } from 'src/app/model/ClassTimingSessionElement';
import { ClassTimingSessionService } from 'src/app/services/class-timing-session.service';

@Component({
  selector: 'app-class-timing-session-list',
  templateUrl: './class-timing-session-list.component.html',
  styleUrls: ['./class-timing-session-list.component.css']
})
export class ClassTimingSessionListComponent implements OnInit {

  auth_token;
  tenant_name;
  classTimingSessions: ClassTimingSessionElement[];
  displayedColumns: string[] = ['position', 'name', 'start', 'end', 'isABreak', 'classTimigName', 'academicSessionName', 'operations'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource;

  @Input() message;
  @Output() showEditClassTimingSessionView: EventEmitter<any> = new EventEmitter();
  constructor(private _callTimingSessionService: ClassTimingSessionService) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In classTimingSession List Component -----------------------------------");
    }
    this.getListAllClassTimingSessions();
  }

  getListAllClassTimingSessions() {
    this._callTimingSessionService.listAllClassTimingSessions(this.auth_token, this.tenant_name).subscribe(
      data => {
        console.log(data)
        this.classTimingSessions = data.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  editClassTimingSession(classTimingSessionId) {
    this.showEditClassTimingSessionView.emit(classTimingSessionId);
  }

  deleteClassTimingSession(classTimingSession) {
    this._callTimingSessionService.deleteClassTimingSession(this.auth_token, this.tenant_name, classTimingSession).subscribe(
      data => {
        alert(data.message);
        this.getListAllClassTimingSessions();
      },
      error => {
        console.error(error);

      }
    );
  }

}
