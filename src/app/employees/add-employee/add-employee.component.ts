import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  personalInformationForm: FormGroup;
  constructor() {}

  ngOnInit() {
    // Initialize form controls for personal information
    this.personalInformationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('male', [Validators.required]),
      // Add more form controls as needed
    });
  }

  handleUpdateEmployee() {
    // Handle update logic
    const personalInfoFormData = this.personalInformationForm.value;
    // You can now use personalInfoFormData for further processing or API calls
  }
}
