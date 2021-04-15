import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClassTeacherService } from 'src/app/services/class-teacher.service';

@Component({
  selector: 'app-class-teacher-edit',
  templateUrl: './class-teacher-edit.component.html',
  styleUrls: ['./class-teacher-edit.component.css']
})
export class ClassTeacherEditComponent implements OnInit {

  auth_token;
  tenant_name;
  form: FormGroup;
  employeeForm: FormGroup;
  batchForm: FormGroup;

  @Input() classTeacherId;
  @Output() sendMessageFromEditToList: EventEmitter<any> = new EventEmitter();
  constructor(private _classTeacherService: ClassTeacherService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In classTimingSession List Component -----------------------------------");
    }
    this.initEditForm();
  }

  initEditForm() {
    console.log(this.classTeacherId);
    this._classTeacherService.getClassTeacherById(this.auth_token, this.tenant_name, this.classTeacherId).subscribe(
      data => {
        console.log(data.data);
        this.buildClassTeacherForm(data.data);
      },
      error => {
        console.error(error);
      }
    )
  }

  buildClassTeacherForm(classTeacherElement) {

    this.batchForm = this._fb.group({
      id: classTeacherElement.batch.id,
      createdAt: classTeacherElement.batch.createdAt,
      description: classTeacherElement.batch.description,
      name: classTeacherElement.batch.name,
      options: classTeacherElement.batch.options,
      position: classTeacherElement.batch.position,
      updatedAt: classTeacherElement.batch.updatedAt
    });

    this.employeeForm = this._fb.group({
      id: classTeacherElement.employee.id,
      firstName: classTeacherElement.employee.firstName,
      lastName: classTeacherElement.employee.lastName
    });

    // main form
    this.form = this._fb.group({
      id: classTeacherElement.id,
      createdAt: classTeacherElement.createdAt,
      dateEffective: classTeacherElement.dateEffective,
      description: classTeacherElement.description,
      options: classTeacherElement.options,
      updatedAt: classTeacherElement.updatedAt,
      batch: this.batchForm,
      employee: this.employeeForm
    });

    console.log(this.form.value)
  }

  onSubmit() {
    console.log(this.form.value);
    this._classTeacherService.updateClassTeacher(this.auth_token, this.tenant_name, this.form.value).subscribe(
      data => {
        // alert(data.message);
        this.sendMessageFromEditToList.emit(data.message);
      },
      error => {
        console.error(error);
      }
    )
  }

}
