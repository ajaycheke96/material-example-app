import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-log',
  templateUrl: './visitor-log.component.html',
  styleUrls: ['./visitor-log.component.css']
})
export class VisitorLogComponent implements OnInit {

  isList;
  isAdd;
  isEdit;
  visitorLogId;

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

  showEdit(id: number) {
    this.isList = false;
    this.isAdd = false;
    this.isEdit = true;
    this.visitorLogId = id;
  }

  sendMessageFromEditToList(message) {
    alert(message);
    this.showList();
  }

}
