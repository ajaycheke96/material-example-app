import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClassTeacherElement } from 'src/app/model/ClassTeacherElement';
import { ClassTeacherService } from 'src/app/services/class-teacher.service';

@Component({
  selector: 'app-class-teacher-list',
  templateUrl: './class-teacher-list.component.html',
  styleUrls: ['./class-teacher-list.component.css']
})
export class ClassTeacherListComponent implements OnInit {

  auth_token;
  tenant_name;
  classTeachers: ClassTeacherElement[];
  displayedColumns: string[] = ['position', 'name', 'batchName', 'dateEffective', 'operations'];

  dataSource;

  @Output() showEdit: EventEmitter<any> = new EventEmitter();
  constructor(private _classTeacherService: ClassTeacherService) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In classTimingSession List Component -----------------------------------");
    }
    this.listInit();
  }

  listInit() {
    this._classTeacherService.listAllClassTeacher(this.auth_token, this.tenant_name).subscribe(
      data => {
        console.log(data);
        this.classTeachers = data.data;
        this.dataSource = new MatTableDataSource(this.classTeachers);
      },
      error => {
        console.error(error);
      }
    )
  }

  // edit class teacher
  editClassTeacher(id: number) {
    this.showEdit.emit(id);
  }

  // delete ClassTeacher
  deleteClassTeacher(classTeacher: ClassTeacherElement) {
    this._classTeacherService.deleteClassTeacher(this.auth_token, this.tenant_name, classTeacher).subscribe(
      data => {
        alert(data.message);
        this.listInit();
      },
      error => {
        console.log(error);
      }
    )
  }
}
