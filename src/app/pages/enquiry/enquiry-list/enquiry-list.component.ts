import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']
})
export class EnquiryListComponent implements OnInit {

  auth_token;
  tenant_name;

  displayedColumns: string[] = ['position', 'firstGuardianName', 'dateOfEnquiry', 'course', 'institute', 'operations'];

  dataSource;

  @Output() editEnquiryById: EventEmitter<any> = new EventEmitter();
  constructor(
    private _enquiryService: EnquiryService
  ) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (this.auth_token === undefined && this.tenant_name === undefined) {
      console.error("AuthToken and tenant_name not found");
    }
    this.initList();
  }

  initList() {
    this._enquiryService.getAllEnquirys(this.auth_token, this.tenant_name).subscribe(
      data => {
        console.log(data.data);
        this.dataSource = new MatTableDataSource(data.data);
      },
      error => {
        console.error(error);
      }
    )
  }

  editEnquiry(id) {
    this.editEnquiryById.emit(id);
  }

  deleteEnquiry(enquiry) {
    this._enquiryService.deleteEnquiry(this.auth_token, this.tenant_name, enquiry).subscribe(
      data => {
        alert(data.message);
        this.initList();
      },
      error => {
        console.error(error);
      }
    )
  }

}
