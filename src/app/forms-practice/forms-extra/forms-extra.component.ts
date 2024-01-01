import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-extra',
  templateUrl: './forms-extra.component.html',
  styleUrls: ['./forms-extra.component.css'],
})
export class FormsExtraComponent implements OnInit {
  signupForm: FormGroup;
  genders = ['male', 'female'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      skills: new FormArray([this.onAddSkills()]),
    });
  }

  onAddSkills() {
    return new FormGroup({
      skill: new FormControl(null, Validators.required),
      experience: new FormControl(null, Validators.required),
    });
  }

  addSkill() {
    (<FormArray>this.signupForm.get('skills')).push(this.onAddSkills());
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
