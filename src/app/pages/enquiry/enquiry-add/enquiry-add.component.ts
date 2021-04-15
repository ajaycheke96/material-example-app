import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-enquiry-add',
  templateUrl: './enquiry-add.component.html',
  styleUrls: ['./enquiry-add.component.css']
})
export class EnquiryAddComponent implements OnInit {

  auth_token;
  tenant_name;
  enquiryForm: FormGroup;
  userForm: FormGroup;
  enquirySourceForm: FormGroup;
  enquiryTypeForm: FormGroup;

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

    this.userForm = this._fb.group({
      id: ''
    });

    this.enquirySourceForm = this._fb.group({
      id: '',
      description: '',
      name: '',
      options: '',
      createdAt: '',
      updatedAt: ''
    });

    this.enquiryTypeForm = this._fb.group({
      id: '',
      description: '',
      name: '',
      options: '',
      createdAt: '',
      updatedAt: ''
    });

    this.enquiryForm = this._fb.group({
      id: '',
      alternateContactNumber: '',
      contactNumber: '',
      createdAt: '',
      dateOfEnquiry: '',
      email: '',
      firstGuardianName: '',
      firstGuardianRelation: '',
      options: '',
      remarks: '',
      secondGuardianName: '',
      secondGuardianRelation: '',
      status: '',
      thirdGuardianName: '',
      thirdGuardianRelation: '',
      updatedAt: '',
      uuid: '',
      enquirySource: this.enquirySourceForm,
      enquiryType: this.enquiryTypeForm,
      user: this.userForm,
      enquiryDetails: this._fb.array([])
    })
  }

  get enquiryDetails(): FormArray {
    return this.enquiryForm.get('enquiryDetails') as FormArray;
  }

  removeEnquiryDetail(i) {
    console.log(i);

  }

  addEnquiryDetail() {
    this.enquiryDetails.push(this.newEnquiryDetail());
    console.log(this.enquiryDetails);
  }

  newEnquiryDetail(): FormGroup {
    return this._fb.group({
      id: '',
      createdAt: '',
      dateOfBirth: '',
      gender: '',
      isAdmitted: '',
      options: '',
      remarks: '',
      studentName: '',
      updatedAt: '',
      uuid: '',
      cours: this._fb.group({
        id: ''
      }),
      institute: this._fb.group({
        id: ''
      })
    })
  }

  onSubmit() {
    console.log(this.enquiryForm.value);
    this._enquiryService.saveEnquiry(this.auth_token, this.tenant_name, this.enquiryForm.value).subscribe(
      data => {
        alert(data.message);
        this.initForm();
      },
      error => {
        console.error(error);
      }
    )
  }

}
