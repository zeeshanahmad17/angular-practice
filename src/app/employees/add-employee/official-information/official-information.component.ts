import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-official-information',
  templateUrl: './official-information.component.html',
  styleUrls: ['./official-information.component.css'],
})
export class OfficialInformationComponent implements OnInit {
  officialInformationForm: FormGroup;

  ngOnInit(): void {
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
  }
}
