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
  cities: any[];

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

    // Set up initial states based on the default country (167)
    const defaultCountryId = 167;
    this.updateStates(defaultCountryId);
  }

  countrySelectionHandler(event) {
    let selectedCountryId = Number(event.target.value);
    this.updateStates(selectedCountryId);
  }

  stateSelectionHandler(event) {
    let selectedStateId = Number(event.target.value);
    this.updateCities(selectedStateId);
  }

  updateStates(countryId: number) {
    const selectedCountry = this.countriesList.find(
      (country) => country.id === countryId
    );

    // Update states
    this.states = selectedCountry ? selectedCountry.states : [];

    // Reset province and city fields in the form
    this.personalInformationForm.get('province').setValue('');
    this.personalInformationForm.get('city').setValue('');

    // Update cities based on the first state (if available)
    this.updateCities(this.states.length > 0 ? this.states[0].id : null);
  }

  updateCities(stateId: number) {
    const selectedState = this.states.find((state) => state.id === stateId);

    // Update cities
    this.cities = selectedState ? selectedState.cities : [];

    // Reset city field in the form
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
