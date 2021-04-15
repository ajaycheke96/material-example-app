import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassTimingSessionService } from 'src/app/services/class-timing-session.service';

@Component({
  selector: 'app-class-timing-session-edit',
  templateUrl: './class-timing-session-edit.component.html',
  styleUrls: ['./class-timing-session-edit.component.css']
})
export class ClassTimingSessionEditComponent implements OnInit {

  auth_token;
  tenant_name;
  classTimingSessionEditForm: FormGroup;

  @Input() classTimingSessionId;
  @Output() getMessageFromEditPage: EventEmitter<any> = new EventEmitter();
  constructor(private _classTimingSessionService: ClassTimingSessionService) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");

    console.log(this.classTimingSessionId);
    this._classTimingSessionService.getClassTimingSessionById(this.auth_token, this.tenant_name, this.classTimingSessionId).subscribe(
      data => {
        console.log(data.data);
        this.initForm(data.data);
      },
      error => {
        console.error(error);
      }
    );
  }

  initForm(classTimingSession) {
    this.classTimingSessionEditForm = new FormGroup({
      id: new FormControl(classTimingSession.id),
      createdAt: new FormControl(classTimingSession.createdAt),
      description: new FormControl(classTimingSession.description),
      end: new FormControl(classTimingSession.end, [Validators.pattern('[0-9][0-9]:[0-9][0-9]:[0-9][0-9]'), Validators.required]),
      isABreak: new FormControl(classTimingSession.isABreak),
      name: new FormControl(classTimingSession.name),
      start: new FormControl(classTimingSession.start, [Validators.pattern('[0-9][0-9]:[0-9][0-9]:[0-9][0-9]'), Validators.required]),
      updatedAt: new FormControl(classTimingSession.updatedAt),
      uuid: new FormControl(classTimingSession.uuid),
      classTimingId: new FormControl(classTimingSession.classTiming.id),
      classTimingName: new FormControl(classTimingSession.classTiming.name),
      classTimingDescription: new FormControl(classTimingSession.classTiming.description),
      classTimingCreatedAt: new FormControl(classTimingSession.classTiming.createdAt),
      classTimingUpdatedAt: new FormControl(classTimingSession.classTiming.updatedAt),
      classTimingUuid: new FormControl(classTimingSession.classTiming.uuid),
      academicSessionId: new FormControl(classTimingSession.classTiming.academicSession.id)
    })
  }

  editClassTimingSession() {
    console.log(this.classTimingSessionEditForm);
    this._classTimingSessionService.editClassTimingSession(this.auth_token, this.tenant_name, this.classTimingSessionEditForm).subscribe(
      data => {
        console.log(data);
        alert(data.message)
        this.getMessageFromEditPage.emit(data.message);
      },
      error => {
        console.error(error);
      }
    );
  }

}
