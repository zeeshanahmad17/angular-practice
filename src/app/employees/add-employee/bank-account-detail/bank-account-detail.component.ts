import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-account-detail',
  templateUrl: './bank-account-detail.component.html',
  styleUrls: ['./bank-account-detail.component.css'],
})
export class BankAccountDetailComponent implements OnInit {
  bankAccountFormGroup: FormGroup;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.bankAccountFormGroup = new FormGroup({
      paymentMode: new FormControl('cash', [Validators.required]),
      bankName: new FormControl(''),
      accountNumber: new FormControl(null),
      phoneNumber: new FormControl(null),
      iban: new FormControl(''),
      accountTitle: new FormControl(''),
    });

    this.bankAccountFormGroup
      .get('paymentMode')
      .valueChanges.subscribe((paymentMode: string) => {
        this.updateValidatorsBasedOnPaymentMode(paymentMode);
      });
  }

  updateValidatorsBasedOnPaymentMode(paymentMode: string): void {
    this.bankAccountFormGroup.get('bankName').clearValidators();
    this.bankAccountFormGroup.get('bankName').setErrors(null);

    this.bankAccountFormGroup.get('accountNumber').clearValidators();
    this.bankAccountFormGroup.get('accountNumber').setErrors(null);

    this.bankAccountFormGroup.get('phoneNumber').clearValidators();
    this.bankAccountFormGroup.get('phoneNumber').setErrors(null);
    
    this.bankAccountFormGroup.get('accountTitle').clearValidators();
    this.bankAccountFormGroup.get('accountTitle').setErrors(null);

    if (paymentMode === 'bank') {
      this.bankAccountFormGroup
        .get('bankName')
        .setValidators([Validators.required]);
      this.bankAccountFormGroup
        .get('accountNumber')
        .setValidators([Validators.required]);
      this.bankAccountFormGroup
        .get('accountTitle')
        .setValidators([Validators.required]);
    } else if (paymentMode === 'mfb') {
      this.bankAccountFormGroup
        .get('bankName')
        .setValidators([Validators.required]);
      this.bankAccountFormGroup
        .get('phoneNumber')
        .setValidators([Validators.required]);
      this.bankAccountFormGroup
        .get('accountTitle')
        .setValidators([Validators.required]);
    }

    this.bankAccountFormGroup.updateValueAndValidity({ emitEvent: true });
    this.cdr.detectChanges();
    console.log(this.bankAccountFormGroup);
  }
}
