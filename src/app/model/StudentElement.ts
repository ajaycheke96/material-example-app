import { BloodGroupElement } from "./BloodGroupElement";
import { CasteElement } from "./CasteElement";
import { CategoryElement } from "./CategoryElement";
import { ReligionElement } from "./ReligionElement";
import { StudentQualificationElement } from "./StudentQualificationElement";
import { StudentSiblingElement } from "./StudentSiblingElement";

export interface StudentElement {
    id: number;
    birthPlace: String;
    contactNumber: String;
    createdAt: String;
    dateOfBirth: String;
    email: String;
    emergencyContactName: String;
    emergencyContactNumber: String;
    firstName: String;
    gender: String;
    lastName: String;
    middleName: String;
    motherTongue: String;
    nationality: String;
    options: String;
    permanentAddressLine1: String;
    permanentAddressLine2: String;
    permanentCity: String;
    permanentCountry: String;
    permanentState: String;
    permanentZipcode: String;
    presentAddressLine1: String;
    presentAddressLine2: String;
    presentCity: String;
    presentCountry: String;
    presentState: String;
    presentZipcode: String;
    sameAsPresentAddress: number;
    studentPhoto: String;
    uniqueIdentificationNumber: String;
    updatedAt: String;
    uuid: String;
    studentQualifications: StudentQualificationElement[];
    studentSiblings2: StudentSiblingElement[];
    bloodGroup: BloodGroupElement;
    caste: CasteElement;
    category: CategoryElement;
    religion: ReligionElement
}