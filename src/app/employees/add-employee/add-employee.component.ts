import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// Forms Imports
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Services
import { DepartmentService } from '../services/department.service';
// Components
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { OfficialInformationComponent } from './official-information/official-information.component';
import { BankAccountDetailComponent } from './bank-account-detail/bank-account-detail.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit, AfterViewInit {
  @ViewChild(PersonalInformationComponent)
  personalComponent: PersonalInformationComponent;

  @ViewChild(OfficialInformationComponent)
  officialComponent: OfficialInformationComponent;

  @ViewChild(BankAccountDetailComponent)
  bankAccountComponent: BankAccountDetailComponent;

  @ViewChild(SalaryDetailComponent) salaryComponent: SalaryDetailComponent;

  isInvalid: boolean = true;
  departments: any[];
  designations: any[];

  constructor(private deparmentService: DepartmentService) {}

  ngOnInit() {
    this.departments = this.deparmentService.getDepartments();
  }
  ngAfterViewInit() {
    this.personalComponent.personalInformationForm.valueChanges.subscribe(() =>
      this.checkValidity()
    );

    this.officialComponent.officialInformationForm.valueChanges.subscribe(() =>
      this.checkValidity()
    );
    this.bankAccountComponent.bankAccountFormGroup.valueChanges.subscribe(() =>
      this.checkValidity()
    );

    this.salaryComponent.salaryFormGroup.valueChanges.subscribe(() =>
      this.checkValidity()
    );
  }

  checkValidity() {
    this.isInvalid =
      this.personalComponent.personalInformationForm.invalid ||
      this.officialComponent.officialInformationForm.invalid ||
      this.bankAccountComponent.bankAccountFormGroup.invalid ||
      this.salaryComponent.salaryFormGroup.invalid;
  }

  handleUpdateEmployee() {
    const data = {
      personalInformation: this.personalComponent.personalInformationForm.value,
      officialInformation: this.officialComponent.officialInformationForm.value,
      bankAccountInformation:
        this.bankAccountComponent.bankAccountFormGroup.value,
      salaryInformation: this.salaryComponent.salaryFormGroup.value,
    };
    console.log(data);
  }
}
