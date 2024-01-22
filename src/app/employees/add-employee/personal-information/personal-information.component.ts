import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  personalInformationForm: FormGroup;

  ngOnInit(): void {
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
      country: new FormControl('pakistan', [Validators.required]),
      province: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      filer: new FormControl(false),
      cnicImage: new FormControl(null, [Validators.required]),
    });
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
