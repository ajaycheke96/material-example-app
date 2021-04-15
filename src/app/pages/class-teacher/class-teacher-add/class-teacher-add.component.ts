import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClassTeacherService } from 'src/app/services/class-teacher.service';

@Component({
  selector: 'app-class-teacher-add',
  templateUrl: './class-teacher-add.component.html',
  styleUrls: ['./class-teacher-add.component.css']
})
export class ClassTeacherAddComponent implements OnInit {


  auth_token;
  tenant_name;
  form: FormGroup;
  employeeForm: FormGroup;
  batchForm: FormGroup;

  constructor(private _classTeacherService: ClassTeacherService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In classTimingSession List Component -----------------------------------");
    }
    this.initForm();
  }

  initForm() {
    this.batchForm = this._fb.group({
      id: '',
      createdAt: '',
      description: '',
      name: '',
      options: '',
      position: '',
      updatedAt: ''
    });

    this.employeeForm = this._fb.group({
      id: ''
    });

    // main form
    this.form = this._fb.group({
      id: '',
      createdAt: '',
      dateEffective: '',
      description: '',
      options: '',
      updatedAt: '',
      batch: this.batchForm,
      employee: this.employeeForm
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this._classTeacherService.saveClassTeacher(this.auth_token, this.tenant_name, this.form.value).subscribe(
      data => {
        console.log(data.data);
        this.initForm();
      },
      error => {
        console.error(error);
      }
    );
  }

}
