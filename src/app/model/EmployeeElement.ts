export class EmployeeElement {


    id: number;
    alternateContactNumber: number;
    alternateEmail: String;
    code: number;
    contactNumber: number;
    createdAt: String;
    dateOfAnniversary: String;
    dateOfBirth: String;
    email: String;
    emergencyContactName: String;
    emergencyContactNumber: String;
    fatherName: String;
    firstName: String;
    gender: String;
    lastName: String;
    maritalStatus: String;
    middleName: String;
    motherName: String;
    motherTongue: String;
    nationality: String;
    options: String;
    permanentAddressLine1: String;
    permanentAddressLine2: String;
    permanentCity: String;
    permanentCountry: String;
    permanentState: String;
    permanentZipcode: String;
    photo: String;
    prefix: String;
    presentAddressLine1: String;
    presentAddressLine2: String;
    presentCity: String;
    presentCountry: String;
    presentState: String;
    presentZipcode: String;
    sameAsPresentAddress: number;
    spouseName: String;
    uniqueIdentificationNumber: String;
    updatedAt: String;
    uuid: number

    constructor(
        id: number,
        alternateContactNumber: number,
        alternateEmail: String,
        code: number,
        contactNumber: number,
        createdAt: String,
        dateOfAnniversary: String,
        dateOfBirth: String,
        email: String,
        emergencyContactName: String,
        emergencyContactNumber: String,
        fatherName: String,
        firstName: String,
        gender: String,
        lastName: String,
        maritalStatus: String,
        middleName: String,
        motherName: String,
        motherTongue: String,
        nationality: String,
        options: String,
        permanentAddressLine1: String,
        permanentAddressLine2: String,
        permanentCity: String,
        permanentCountry: String,
        permanentState: String,
        permanentZipcode: String,
        photo: String,
        prefix: String,
        presentAddressLine1: String,
        presentAddressLine2: String,
        presentCity: String,
        presentCountry: String,
        presentState: String,
        presentZipcode: String,
        sameAsPresentAddress: number,
        spouseName: String,
        uniqueIdentificationNumber: String,
        updatedAt: String,
        uuid: number
    ) {
        this.id = id;
        this.alternateContactNumber = alternateContactNumber;
        this.alternateEmail = alternateEmail;
        this.code = code;
        this.contactNumber = contactNumber;
        this.createdAt = createdAt;
        this.dateOfAnniversary = dateOfAnniversary;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.emergencyContactName = emergencyContactName;
        this.emergencyContactNumber = emergencyContactNumber;
        this.fatherName = fatherName;
        this.firstName = firstName;
        this.gender = gender;
        this.lastName = lastName;
        this.maritalStatus = maritalStatus;
        this.middleName = middleName;
        this.motherName = motherName;
        this.motherTongue = motherTongue;
        this.nationality = nationality;
        this.options = options;
        this.permanentAddressLine1 = permanentAddressLine1;
        this.permanentAddressLine2 = permanentAddressLine2;
        this.permanentCity = permanentCity;
        this.permanentCountry = permanentCountry;
        this.permanentState = permanentState;
        this.permanentZipcode = permanentZipcode;
        this.photo = photo;
        this.prefix = prefix;
        this.presentAddressLine1 = presentAddressLine1;
        this.presentAddressLine2 = presentAddressLine2;
        this.presentCity = presentCity;
        this.presentCountry = presentCountry;
        this.presentState = presentState;
        this.presentZipcode = presentZipcode;
        this.sameAsPresentAddress = sameAsPresentAddress;
        this.spouseName = spouseName;
        this.uniqueIdentificationNumber = uniqueIdentificationNumber;
        this.updatedAt = updatedAt;
        this.uuid = uuid
    }
}