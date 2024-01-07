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
      gender: new FormControl('male', [Validators.required]),
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
    this.officialInformationForm = new FormGroup({});

    // Initialize form controls for bank account details
    this.bankAccountDetailForm = new FormGroup({});

    // Initialize form controls for salary details
    this.salaryDetailForm = new FormGroup({});
  }

  handleUpdateEmployee() {
    // Handle update logic
    const personalInfoFormData = this.personalInformationForm.value;
    // You can now use personalInfoFormData for further processing or API calls
  }
}
