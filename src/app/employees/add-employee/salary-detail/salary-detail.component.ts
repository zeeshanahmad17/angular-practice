import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-salary-detail',
  templateUrl: './salary-detail.component.html',
  styleUrls: ['./salary-detail.component.css'],
})
export class SalaryDetailComponent {
  @Input() salaryFormGroup: FormGroup;
}
