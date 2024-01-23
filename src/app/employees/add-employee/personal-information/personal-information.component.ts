import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  personalInformationForm: FormGroup;
  countriesList: any[];
  states: any[];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countriesList = this.countryService.getCountries();
    // Initialize form controls for personal information
    this.personalInformationForm = new FormGroup({
      profileImage: new FormControl(null),
      // profileImageSource: new FormControl(''),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('female', [Validators.required]),
      cnic: new FormControl(null, [Validators.required]),
      dob: new FormControl(null),
      contact: new FormControl(null),
      email: new FormControl('', [Validators.required]),
      country: new FormControl(167, [Validators.required]),
      province: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      filer: new FormControl(false),
      cnicImage: new FormControl(null, [Validators.required]),
    });
  }

  countrySelectionHandler(event) {
    let selectedCountry = Number(event.target.value);
    this.states = this.countriesList.find(
      (country) => country.id === selectedCountry
    ).states;
  }

  // Image Handler
  selectImageHandler = async (e, fieldName) => {
    const file = e.target.files[0];
    this.personalInformationForm.get(fieldName).setValue(file);
    // following code can be used to preview the profile image
    // const blob = new Blob([file], { type: file.type });
    // const blobUrl = URL.createObjectURL(blob);
    // this.personalInformationForm.get('profileImageSource').setValue(blobUrl);
  };
}
