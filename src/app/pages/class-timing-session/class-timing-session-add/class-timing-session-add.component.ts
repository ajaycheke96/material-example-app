import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassTimingSessionService } from 'src/app/services/class-timing-session.service';

@Component({
  selector: 'app-class-timing-session-add',
  templateUrl: './class-timing-session-add.component.html',
  styleUrls: ['./class-timing-session-add.component.css']
})
export class ClassTimingSessionAddComponent implements OnInit {

  auth_token;
  tenant_name;
  classTimingSessionAddForm: FormGroup;

  constructor(private _classTimingSessionService: ClassTimingSessionService) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    this.initForm();
  }

  initForm() {
    this.classTimingSessionAddForm = new FormGroup({
      id: new FormControl(''),
      createdAt: new FormControl(''),
      description: new FormControl(''),
      end: new FormControl(''),
      isABreak: new FormControl(''),
      name: new FormControl(''),
      start: new FormControl(''),
      updatedAt: new FormControl(''),
      uuid: new FormControl(''),
      classTimingId: new FormControl(''),
      classTimingName: new FormControl(''),
      classTimingDescription: new FormControl(''),
      classTimingCreatedAt: new FormControl(''),
      classTimingUpdatedAt: new FormControl(''),
      classTimingUuid: new FormControl(''),
      academicSessionId: new FormControl('')
    })
  }

  saveClassTimingSession() {
    console.log(this.classTimingSessionAddForm);
    this._classTimingSessionService.saveClassTimingSession(this.auth_token, this.tenant_name, this.classTimingSessionAddForm).subscribe(
      data => {
        console.log(data);
        this.initForm();
        alert(data.message);
      },
      error => {
        console.error(error);
      }
    );
  }

}
