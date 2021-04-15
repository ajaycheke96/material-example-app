import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CallLogElement } from 'src/app/model/CallLogElement';
import { CallLogsService } from 'src/app/services/call-logs.service';

@Component({
  selector: 'app-call-log-edit',
  templateUrl: './call-log-edit.component.html',
  styleUrls: ['./call-log-edit.component.css']
})
export class CallLogEditComponent implements OnInit {

  message;

  apiResponse = {
    "isEditShow": false,
    "message": ""
  };

  editCallLogElement: any;
  editCallLogForm: FormGroup;

  @Input() auth_token;
  @Input() editCallLogElementId;

  @Output() toggleEditView: EventEmitter<any> = new EventEmitter();
  constructor(private _callLogService: CallLogsService) { }

  ngOnInit(): void {

    console.log(`AuthToken: ${this.auth_token} , Id: ${this.editCallLogElementId}`);

    this._callLogService.getCallLogById(this.auth_token, this.editCallLogElementId).subscribe(
      data => {
        this.editCallLogElement = data.data;
        console.log(this.editCallLogElement);
        this.editCallLogForm = new FormGroup({
          'callLogId': new FormControl(this.editCallLogElement.id),
          'callLogName': new FormControl(this.editCallLogElement.name),
          'callLogDescription': new FormControl(this.editCallLogElement.description),
          // 'callLogEndTime': new FormControl(this.editCallLogElement.endTime),
          'callLogIncomingNumber': new FormControl(this.editCallLogElement.incomingNumber),
          'callLogOutgoingNumber': new FormControl(this.editCallLogElement.outgoingNumber),
          // 'callLogStartTime': new FormControl(this.editCallLogElement.startTime),
          'callLogType': new FormControl(this.editCallLogElement.type),
          'callingPurposeId': new FormControl(this.editCallLogElement.callingPurpos.id),
          'callingPurposeName': new FormControl(this.editCallLogElement.callingPurpos.name),
          'callingPurposeDescription': new FormControl(this.editCallLogElement.callingPurpos.description),
          'userId': new FormControl(this.editCallLogElement.user.id)
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  editCallLog() {
    console.log("editCallLog: CallLog name " + this.editCallLogForm.value.callLogName + ", callingPurpos name:" + this.editCallLogForm.value.callingPurposeName);
    this.editCallLogElement = {
      "id": this.editCallLogForm.value.callLogId,
      "name": this.editCallLogForm.value.callLogName,
      "description": this.editCallLogForm.value.callLogDescription,
      // "endTime": this.callLogForm.value.callLogEndTime,
      "incomingNumber": this.editCallLogForm.value.callLogIncomingNumber,
      "outgoingNumber": this.editCallLogForm.value.callLogOutgoingNumber,
      // "startTime": this.callLogForm.value.callLogStartTime,
      "type": this.editCallLogForm.value.callLogType,
      "callingPurpos": {
        "id": this.editCallLogForm.value.callingPurposeId,
        "name": this.editCallLogForm.value.callingPurposeName,
        "description": this.editCallLogForm.value.callLogDescription
      },
      "user": {
        "id": this.editCallLogForm.value.userId
      }
    };
    this._callLogService.updateCallLog(this.auth_token, this.editCallLogElement).subscribe(
      data => {
        console.log(data);
        this.message = data.message;
        this.toggleEditView.emit(this.message);
      },
      error => {
        console.error(error);
      }
    )
  }
}
