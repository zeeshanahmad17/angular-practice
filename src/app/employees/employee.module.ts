import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { PersonalInformationComponent } from './add-employee/personal-information/personal-information.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { OfficialInformationComponent } from './add-employee/official-information/official-information.component';
import { BankAccountDetailComponent } from './add-employee/bank-account-detail/bank-account-detail.component';
import { SalaryDetailComponent } from './add-employee/salary-detail/salary-detail.component';
// Services
import { DepartmentService } from './services/department.service';
import { CountryService } from './services/countries.service';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    PersonalInformationComponent,
    OfficialInformationComponent,
    BankAccountDetailComponent,
    SalaryDetailComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [DepartmentService, CountryService],
  exports: [AddEmployeeComponent],
})
export class EmployeeModule {}
