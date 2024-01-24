import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/countries.service';
import { ICountry, IState } from '../../models/country';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  personalInformationForm: FormGroup;
  countriesList: any[] = [];
  states: any[] = [];
  cities: any[] = [];

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
      country: new FormControl('Pakistan', [Validators.required]),
      province: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      filer: new FormControl(false),
      cnicImage: new FormControl(null, [Validators.required]),
    });

    this.updateStates('Pakistan');
  }

  countrySelectionHandler(event) {
    let selectedCountry = event.target.value;
    this.updateStates(selectedCountry);
  }

  stateSelectionHandler(event) {
    let selectedState = event.target.value;
    this.updateCities(selectedState);
  }

  updateStates(countryName) {
    const selectedCountry = this.countriesList.find(
      (country: ICountry) => country.countryName === countryName
    );
    this.personalInformationForm.get('country').setValue(countryName);

    this.states = selectedCountry ? selectedCountry.states : [];
    this.personalInformationForm.get('province').setValue('');
    this.personalInformationForm.get('city').setValue('');
  }

  updateCities(stateName) {
    const selectedState = this.states.find(
      (state: IState) => state.stateName === stateName
    );
    this.cities = selectedState ? selectedState.cities : [];
    this.personalInformationForm.get('city').setValue('');
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
