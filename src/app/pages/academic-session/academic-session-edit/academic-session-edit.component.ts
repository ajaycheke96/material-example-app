import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AcademicSessionService } from 'src/app/services/academic-session.service';

@Component({
  selector: 'app-academic-session-edit',
  templateUrl: './academic-session-edit.component.html',
  styleUrls: ['./academic-session-edit.component.css']
})
export class AcademicSessionEditComponent implements OnInit {

  auth_token;
  tenant_name;
  academicSessionForm: FormGroup;
  academicSession;

  @Input() academicSessionId;
  @Output() sendMessageToList: EventEmitter<any> = new EventEmitter();
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
    console.log(this.academicSessionId);
    this._academicSessionService.getAcademicSessionById(this.auth_token, this.tenant_name, this.academicSessionId).subscribe(
      data => {
        console.log(data);
        this.academicSession = data.data;

        // Init Form data
        this.academicSessionForm = new FormGroup({
          id: new FormControl(this.academicSession.id),
          name: new FormControl(this.academicSession.name),
          description: new FormControl(this.academicSession.description),
          startDate: new FormControl(this.academicSession.startDate),
          endDate: new FormControl(this.academicSession.endDate),
          isDefault: new FormControl(this.academicSession.isDefault),
          options: new FormControl(this.academicSession.options),
          createdAt: new FormControl(this.academicSession.createdAt),
          updatedAt: new FormControl(this.academicSession.updatedAt)
        })
      },
      error => {
        console.error(error);
      }
    );
  }

  editAcademicSession() {
    this._academicSessionService.updateAcademicSession(this.auth_token, this.tenant_name, this.academicSessionForm).subscribe(
      data => {
        console.log(data);
        alert(data.message);
        this.sendMessageToList.emit(data.message);
      },
      error => {
        console.error(error);
      }
    );
  }
}
