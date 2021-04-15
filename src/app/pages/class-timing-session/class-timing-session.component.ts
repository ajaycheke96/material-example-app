import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-timing-session',
  templateUrl: './class-timing-session.component.html',
  styleUrls: ['./class-timing-session.component.css']
})
export class ClassTimingSessionComponent implements OnInit {

  // auth_token;
  // tenant_name;
  isClassTimingSessionListShow;
  isClassTimingSessionAddShow;
  isClassTimingSessionEditShow;

  classTimingSessionId;
  message;

  constructor() { }

  ngOnInit(): void {
    this.toggleClassTimingSessionList();
  }

  toggleClassTimingSessionList() {
    this.isClassTimingSessionListShow = true;
    this.isClassTimingSessionAddShow = false;
    this.isClassTimingSessionEditShow = false;
  }

  toggleClassTimingSessionAdd() {
    this.isClassTimingSessionListShow = false;
    this.isClassTimingSessionAddShow = true;
    this.isClassTimingSessionEditShow = false;
  }

  showEditClassTimingSessionView(classTimingSessionId) {
    this.isClassTimingSessionListShow = false;
    this.isClassTimingSessionAddShow = false;
    this.isClassTimingSessionEditShow = true;
    this.classTimingSessionId = classTimingSessionId;
  }

  getMessageFromEditPage(message) {
    this.toggleClassTimingSessionList();
    this.message = message;
  }
}
