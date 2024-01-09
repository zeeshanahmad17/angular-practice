import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-salary-detail',
  templateUrl: './salary-detail.component.html',
  styleUrls: ['./salary-detail.component.css'],
})
export class SalaryDetailComponent implements OnInit {
  salaryFormGroup: FormGroup;

  ngOnInit(): void {
    // Initialize form controls for salary details
    this.salaryFormGroup = new FormGroup({
      amount: new FormControl(null, [Validators.required]),
      payrollType: new FormControl('monthly', [Validators.required]),
      currencyType: new FormControl('rs', [Validators.required]),
    });
  }
}
