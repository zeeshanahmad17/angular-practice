import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  personalInformationForm: FormGroup;
  officialInformationForm: FormGroup;
  bankAccountDetailForm: FormGroup;
  salaryDetailForm: FormGroup;

  constructor() {}

  ngOnInit() {
    // Initialize form controls for personal information
    this.personalInformationForm = new FormGroup({
      profileImage: new FormControl(null),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('female', [Validators.required]),
      cnic: new FormControl(null, [Validators.required]),
      dob: new FormControl(null),
      contact: new FormControl(null),
      email: new FormControl('', [Validators.required]),
      country: new FormControl('pakistan', [Validators.required]),
      province: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      filer: new FormControl(false),
      cnicImage: new FormControl(null, [Validators.required]),
    });

    // Initialize form controls for official information
    this.officialInformationForm = new FormGroup({
      jobType: new FormControl('partTime', [Validators.required]),
      department: new FormControl('websiteDevelopment', [Validators.required]),
      designation: new FormControl('jrDeveloper', [Validators.required]),
      manager: new FormControl(''),
      hireDate: new FormControl(null, [Validators.required]),
      joiningDate: new FormControl(null, [Validators.required]),
      employeeType: new FormControl('permanent', [Validators.required]),
      probation: new FormControl(null),
      endDate: new FormControl(null), // required if employeeType is permanent
    });

    // Initialize form controls for bank account details
    this.bankAccountDetailForm = new FormGroup({
      paymentMode: new FormControl('cash', [Validators.required]),
      bankName: new FormControl('', [Validators.required]),
      accountNumber: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      iban: new FormControl(''),
      accountTitle: new FormControl('', [Validators.required]),
    });

    // Initialize form controls for salary details
    this.salaryDetailForm = new FormGroup({
      amount: new FormControl(null, [Validators.required]),
      payrollType: new FormControl('monthly', [Validators.required]),
      currencyType: new FormControl('rs', [Validators.required]),
    });
  }

  handleUpdateEmployee() {
    const userData = {
      personalInformation: this.personalInformationForm.value,
      officialInformation: this.officialInformationForm.value,
      bankDetails: this.bankAccountDetailForm.value,
      salaryDetails: this.salaryDetailForm.value,
    };
    console.log(userData);
  }
}
