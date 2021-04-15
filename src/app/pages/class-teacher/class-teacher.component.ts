import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-teacher',
  templateUrl: './class-teacher.component.html',
  styleUrls: ['./class-teacher.component.css']
})
export class ClassTeacherComponent implements OnInit {

  isList;
  isAdd;
  isEdit;
  classTeacherId;

  constructor() { }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.isList = true;
    this.isAdd = false;
    this.isEdit = false;
  }

  showAdd() {
    this.isList = false;
    this.isAdd = true;
    this.isEdit = false;
  }

  showEdit(id) {
    this.isList = false;
    this.isAdd = false;
    this.isEdit = true;
    this.classTeacherId = id;
  }

  sendMessageFromEditToList(message) {
    alert(message);
    this.showList();
  }

}
