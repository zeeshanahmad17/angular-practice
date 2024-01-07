import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bank-account-detail',
  templateUrl: './bank-account-detail.component.html',
  styleUrls: ['./bank-account-detail.component.css'],
})
export class BankAccountDetailComponent {
  @Input() bankAccountFormGroup: FormGroup;
}
