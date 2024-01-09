import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-account-detail',
  templateUrl: './bank-account-detail.component.html',
  styleUrls: ['./bank-account-detail.component.css'],
})
export class BankAccountDetailComponent implements OnInit {
  bankAccountFormGroup: FormGroup;

  ngOnInit(): void {
    // Initialize form controls for bank account details
    this.bankAccountFormGroup = new FormGroup({
      paymentMode: new FormControl('cash', [Validators.required]),
      bankName: new FormControl('', [Validators.required]),
      accountNumber: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      iban: new FormControl(''),
      accountTitle: new FormControl('', [Validators.required]),
    });
  }
}
