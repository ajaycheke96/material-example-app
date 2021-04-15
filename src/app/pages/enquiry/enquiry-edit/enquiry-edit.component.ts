import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryElement } from 'src/app/model/EnquiryElement';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-enquiry-edit',
  templateUrl: './enquiry-edit.component.html',
  styleUrls: ['./enquiry-edit.component.css']
})
export class EnquiryEditComponent implements OnInit {

  auth_token;
  tenant_name;
  enquiryForm: FormGroup;
  userForm: FormGroup;
  enquirySourceForm: FormGroup;
  enquiryTypeForm: FormGroup;

  @Input() enquiryId;
  @Output() sendMessageToListFromEdit: EventEmitter<any> = new EventEmitter();
  constructor(
    private _enquiryService: EnquiryService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (this.auth_token == undefined && this.tenant_name == undefined) {
      console.error("AuthToken and TenantName not found");

    }
    this.initForm();
  }

  initForm() {
    console.log(this.enquiryId);
    this._enquiryService.getOneEnquiryById(this.auth_token, this.tenant_name, this.enquiryId).subscribe(
      data => {
        console.log(data.data);
        this.buildForm(data.data);
      },
      error => {
        console.error(error);
      }
    )
  }

  buildForm(enquiryElement: EnquiryElement) {

    console.log(enquiryElement.user.id);

    this.userForm = this._fb.group({
      id: enquiryElement.user.id
    });

    this.enquirySourceForm = this._fb.group({
      id: enquiryElement.enquirySource.id,
      description: enquiryElement.enquirySource.description,
      name: enquiryElement.enquirySource.name,
      options: enquiryElement.enquirySource.options,
      createdAt: enquiryElement.enquirySource.createdAt,
      updatedAt: enquiryElement.enquirySource.updatedAt
    });

    this.enquiryTypeForm = this._fb.group({
      id: enquiryElement.enquirySource.id,
      description: enquiryElement.enquirySource.description,
      name: enquiryElement.enquirySource.name,
      options: enquiryElement.enquirySource.options,
      createdAt: enquiryElement.enquirySource.createdAt,
      updatedAt: enquiryElement.enquirySource.updatedAt
    });

    this.enquiryForm = this._fb.group({
      id: enquiryElement.id,
      alternateContactNumber: enquiryElement.alternateContactNumber,
      contactNumber: enquiryElement.contactNumber,
      createdAt: enquiryElement.createdAt,
      dateOfEnquiry: enquiryElement.dateOfEnquiry,
      email: enquiryElement.email,
      firstGuardianName: enquiryElement.firstGuardianName,
      firstGuardianRelation: enquiryElement.firstGuardianRelation,
      options: enquiryElement.options,
      remarks: enquiryElement.remarks,
      secondGuardianName: enquiryElement.secondGuardianName,
      secondGuardianRelation: enquiryElement.secondGuardianRelation,
      status: enquiryElement.status,
      thirdGuardianName: enquiryElement.thirdGuardianName,
      thirdGuardianRelation: enquiryElement.thirdGuardianRelation,
      updatedAt: enquiryElement.updatedAt,
      uuid: enquiryElement.uuid,
      enquirySource: this.enquirySourceForm,
      enquiryType: this.enquiryTypeForm,
      user: this.userForm,
      enquiryDetails: this._fb.array(
        enquiryElement.enquiryDetails.map(
          enquiryDetail => this._fb.group({
            id: enquiryDetail.id,
            createdAt: enquiryDetail.createdAt,
            dateOfBirth: enquiryDetail.dateOfBirth,
            gender: enquiryDetail.gender,
            isAdmitted: enquiryDetail.isAdmitted,
            options: enquiryDetail.options,
            remarks: enquiryDetail.remarks,
            studentName: enquiryDetail.studentName,
            updatedAt: enquiryDetail.updatedAt,
            uuid: enquiryDetail.uuid,
            cours: this._fb.group({
              id: enquiryDetail.cours.id
            }),
            institute: this._fb.group({
              id: enquiryDetail.institute.id
            })
          })
        )
      )
    })
  }

  get enquiryDetails(): FormArray {
    return this.enquiryForm.get('enquiryDetails') as FormArray;
  }

  removeEmployeeDesignation(i) {
    console.log(i);

  }

  addEmployeeDesignation() {
    console.log("Add");
  }

  onSubmit() {
    console.log(this.enquiryForm.value);
    this._enquiryService.updateEnquiry(this.auth_token, this.tenant_name, this.enquiryForm.value).subscribe(
      data => {
        // alert(data.message)
        this.sendMessageToListFromEdit.emit(data.message);
      },
      error => {
        console.error(error);
      }
    )
  }
}
