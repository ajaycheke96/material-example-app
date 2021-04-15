import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { CallingPurposeElement } from 'src/app/model/CallingPurposeElement';
import { CallLogElement } from 'src/app/model/CallLogElement';
import { UserElement } from 'src/app/model/UserElement';
import { CallLogsService } from 'src/app/services/call-logs.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-call-logs',
  templateUrl: './call-logs.component.html',
  styleUrls: ['./call-logs.component.css']
})

export class CallLogsComponent implements OnInit {

  isLoggedIn;

  displayedColumns: string[] = ['position', 'name', 'callingPurpos', 'user', 'operations'];

  callLogList: CallLogElement[];
  callLogElement: CallLogElement;
  callLogForm: FormGroup;

  callingPurposeElement: CallingPurposeElement;
  userElement: UserElement;

  isListPageShow: boolean;
  isAddPageShow: boolean;
  isEditPageShow: boolean;
  editCallLogElementId;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource;

  auth_token;
  constructor(private _callLogService: CallLogsService, private userService: UserService) { }

  ngOnInit(): void {

    this.isLoggedIn = sessionStorage.getItem("isLoggedIn");

    // this.isAddPageShow = false;
    // this.isEditPageShow = false;
    // this.isListPageShow = true;
    this.initForm();
    this.getAuthToken();
    console.log("Auth token pass from sessionStorage :" + this.auth_token);
  }

  initForm() {
    this.callLogForm = new FormGroup({
      'callLogName': new FormControl(''),
      'callLogDescription': new FormControl(''),
      // 'callLogEndTime': new FormControl(''),
      'callLogIncomingNumber': new FormControl(''),
      'callLogOutgoingNumber': new FormControl(''),
      // 'callLogStartTime': new FormControl(''),
      'callLogType': new FormControl(''),
      // 'callingPurposeId': new FormControl(''),
      'callingPurposeDescription': new FormControl(''),
      'callingPurposeName': new FormControl(''),
      'userId': new FormControl('')
    });
  }

  getAuthToken() {
    // // this.auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxNzI5NDkyNiwiaWF0IjoxNjE3MjU4OTI2fQ.zp_VZuqtYi4DXudVCaAMD6S5ogmMWo7pn2xnChaPSnw";
    // this.userService.getAuthToken().subscribe(
    //   data => {
    //     this.auth_token = data.data;
    //     console.log("From Call Log Component: " + this.auth_token);
    //     this.toggleListCallLogView();
    //   }
    // )
    this.auth_token = sessionStorage.getItem("auth_token");
    console.log("From Call Log Component: " + this.auth_token);
    this.toggleListCallLogView();
  }

  toggleListCallLogView() {
    this.isAddPageShow = false;
    this.isEditPageShow = false;
    this.isListPageShow = true;
    this.getListCallLogs();
  }

  getListCallLogs() {
    this._callLogService.getCallLogList(this.auth_token).subscribe(data => {
      console.log(data);
      this.callLogList = data.data;
      this.dataSource = new MatTableDataSource<CallLogElement>(this.callLogList);
      this.dataSource.paginator = this.paginator;
      this.isAddPageShow = false;
      this.isEditPageShow = false;
      this.isListPageShow = true;
    },
      error => {
        console.error(error);
      }
    );
  }

  toggleAddCallLogView() {
    this.isAddPageShow = true;
    this.isEditPageShow = false;
    this.isListPageShow = false;
    this.initForm();
  }

  saveCallLog() {
    // console.log(this.callLogForm.value);
    this.callLogElement = {
      "name": this.callLogForm.value.callLogName,
      "description": this.callLogForm.value.callLogDescription,
      // "endTime": this.callLogForm.value.callLogEndTime,
      "incomingNumber": this.callLogForm.value.callLogIncomingNumber,
      "outgoingNumber": this.callLogForm.value.callLogOutgoingNumber,
      // "startTime": this.callLogForm.value.callLogStartTime,
      "type": this.callLogForm.value.callLogType,
      "callingPurpos": {
        // "id": this.callLogForm.value.callingPurposeId,
        "name": this.callLogForm.value.callingPurposeName,
        "description": this.callLogForm.value.callLogDescription
      },
      "user": {
        "id": this.callLogForm.value.userId
      }
    };

    // console.log("From SaveCallLogs :" + this.auth_token + " Object :" + this.callLogElement);

    this._callLogService.saveCallLog(this.auth_token, this.callLogElement)
      .subscribe(
        data => {
          console.log("Message: " + data);
          this.initForm();
          this.getListCallLogs();
          alert(data.message);
        },
        error => { console.error(error) }
      );
    // this.callLogForm = new FormGroup({
    //   'callLogName': new FormControl(''),
    //   'callLogDescription': new FormControl(''),
    //   // 'callLogEndTime': new FormControl(''),
    //   'callLogIncomingNumber': new FormControl(''),
    //   'callLogOutgoingNumber': new FormControl(''),
    //   // 'callLogStartTime': new FormControl(''),
    //   'callLogType': new FormControl(''),
    //   // 'callingPurposeId': new FormControl(''),
    //   'callingPurposeDescription': new FormControl(''),
    //   'callingPurposeName': new FormControl(''),
    //   'userId': new FormControl('')
    // });
  }

  // Delete Call Log
  deleteCallLog(element: CallLogElement) {
    console.log(`Deleting the Element: ${element}`);
    if (confirm) {
      this._callLogService.deleteCallLog(this.auth_token, element).subscribe(
        data => {
          alert(data.message);
          this.getListCallLogs();
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  // show Edit Call Log Block
  showEditCallLog(element: any) {
    this.editCallLogElementId = element;
    console.log(this.editCallLogElementId);
    this.isAddPageShow = false;
    this.isEditPageShow = true;
    this.isListPageShow = false;
  }

  toggleEditCallLogView(message) {
    console.log("call log component: toggleEditCallLogView: " + message);
    this.isAddPageShow = false;
    this.isEditPageShow = false;
    this.isListPageShow = true;
    alert("Message: " + message);
    this.getListCallLogs();
  }
}
