import { EnquiryDetailElement } from "./EnquiryDetailElement";
import { EnquirySourceElement } from "./EnquirySourceElement";
import { UserElement } from "./UserElement"

export interface EnquiryElement {
    id: number;
    alternateContactNumber: String
    contactNumber: String
    createdAt: String
    dateOfEnquiry: String,
    email: String,
    firstGuardianName: String,
    firstGuardianRelation: String,
    options: String,
    remarks: String,
    secondGuardianName: String,
    secondGuardianRelation: String,
    status: String,
    thirdGuardianName: String,
    thirdGuardianRelation: String,
    updatedAt: String,
    uuid: String,
    enquirySource: EnquirySourceElement,
    enquiryType: String,
    user: UserElement,
    enquiryDetails: EnquiryDetailElement[]
}