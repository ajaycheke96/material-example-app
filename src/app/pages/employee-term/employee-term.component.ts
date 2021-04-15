import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-term',
  templateUrl: './employee-term.component.html',
  styleUrls: ['./employee-term.component.css']
})
export class EmployeeTermComponent implements OnInit {

  isList;
  isEdit;
  isAdd;

  employeeTermId;

  constructor() { }

  ngOnInit(): void {
    this.listInit();
  }

  listInit() {
    this.isList = true;
    this.isEdit = false;
    this.isAdd = false;
  }

  addInit() {
    this.isList = false;
    this.isEdit = false;
    this.isAdd = true;
  }

  editInitFormList(id) {
    this.employeeTermId = id;
    console.log(this.employeeTermId);
    this.isList = false;
    this.isEdit = true;
    this.isAdd = false;
  }

  sendMessageToListFromEdit(message) {
    alert(message);
    this.listInit();
  }

}
