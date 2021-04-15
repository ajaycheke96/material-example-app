import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  isList;
  isAdd;
  isEdit;

  enquiryId;

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
    this.enquiryId = id;
    this.isList = false;
    this.isAdd = false;
    this.isEdit = true;
  }

  sendMessageToListFromEdit(message) {
    alert(message);
    this.showList();
  }

}
