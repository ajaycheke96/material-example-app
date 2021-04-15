import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { buildMapFromList } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VisitorLogElement } from 'src/app/model/VisitorLogElement';
import { VisitorLogService } from 'src/app/services/visitor-log.service';

@Component({
  selector: 'app-visitor-log-edit',
  templateUrl: './visitor-log-edit.component.html',
  styleUrls: ['./visitor-log-edit.component.css']
})
export class VisitorLogEditComponent implements OnInit {

  auth_token;
  tenant_name;
  visitorLogForm: FormGroup;
  employeeForm: FormGroup;
  studentForm: FormGroup;
  visitingPurposeForm: FormGroup;

  @Input() visitorLogId;
  @Output() sendMessageFromEditToList: EventEmitter<any> = new EventEmitter();
  constructor(
    private _visitorLogService: VisitorLogService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In classTimingSession List Component -----------------------------------");
    }
    this.initForm();
  }

  buildForm(visitorLog: VisitorLogElement) {
    this.employeeForm = this._fb.group({
      id: visitorLog.employee.id,
      firstName: visitorLog.employee.firstName,
      lastName: visitorLog.employee.lastName
    })

    this.studentForm = this._fb.group({
      id: visitorLog.student.id,
      firstName: visitorLog.student.firstName,
      lastName: visitorLog.student.lastName
    })

    this.visitingPurposeForm = this._fb.group({
      id: visitorLog.visitingPurpos.id,
      createdAt: visitorLog.visitingPurpos.createdAt,
      description: visitorLog.visitingPurpos.description,
      name: visitorLog.visitingPurpos.name,
      options: visitorLog.visitingPurpos.options,
      updatedAt: visitorLog.visitingPurpos.updatedAt
    })

    this.visitorLogForm = this._fb.group({
      id: visitorLog.id,
      address: visitorLog.address,
      companyName: visitorLog.companyName,
      contactNumber: visitorLog.contactNumber,
      createdAt: visitorLog.createdAt,
      dateOfVisit: visitorLog.dateOfVisit,
      entryTime: visitorLog.entryTime,
      exitTime: visitorLog.exitTime,
      name: visitorLog.name,
      options: visitorLog.options,
      relationWithStudent: visitorLog.relationWithStudent,
      remarks: visitorLog.remarks,
      type: visitorLog.type,
      updatedAt: visitorLog.updatedAt,
      uploadToken: visitorLog.uploadToken,
      uuid: visitorLog.uuid,
      visitorCount: visitorLog.visitorCount,
      employee: this.employeeForm,
      student: this.studentForm,
      visitingPurpos: this.visitingPurposeForm
    });
  }

  initForm() {
    console.log(this.visitorLogId)
    this._visitorLogService.getOneVisitorLogById(this.auth_token, this.tenant_name, this.visitorLogId).subscribe(
      data => {
        this.buildForm(data.data);
      },
      error => {
        console.error(error);
      }
    )
  }

  onSubmit() {
    // console.log(this.visitorLogForm.value)
    this._visitorLogService.updateVisitorLog(this.auth_token, this.tenant_name, this.visitorLogForm.value).subscribe(
      data => {
        console.log(data);
        this.sendMessageFromEditToList.emit(data.message);
      },
      error => {
        console.error(error);
      }
    );
  }

}
