import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-session',
  templateUrl: './academic-session.component.html',
  styleUrls: ['./academic-session.component.css']
})
export class AcademicSessionComponent implements OnInit {

  isListViewShow;
  isAddViewShow;
  isEditViewShow;
  academicSessionId;
  constructor() { } //private dialog: MatDialog

  ngOnInit(): void {
    this.toggleListPage();
  }

  toggleListPage() {
    this.isListViewShow = true;
    this.isAddViewShow = false;
    this.isEditViewShow = false;
  }

  toggleAddPage() {
    this.isListViewShow = false;
    this.isAddViewShow = true;
    this.isEditViewShow = false;
    // this.dialog.open(AcademicSessionAddComponent)
  }

  fetchAcademicSessionId(academicSessionId) {
    console.log(academicSessionId);
    this.isListViewShow = false;
    this.isAddViewShow = false;
    this.isEditViewShow = true;
    this.academicSessionId = academicSessionId;
  }

  fetchMessageFromEdit(message) {
    console.log(message);
    this.toggleListPage();
  }

}
