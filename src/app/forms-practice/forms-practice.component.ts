import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-practice',
  templateUrl: './forms-practice.component.html',
  styleUrls: ['./forms-practice.component.css'],
})
export class FormsPracticeComponent {
  @ViewChild('f') signupForm: NgForm;
  question: string = 'teacher';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  formSubmitted: boolean = false;

  user = {
    username: '',
    email: '',
    secretQuestion: ' ',
    answer: '',
    gender: '',
  };
  suggestUserName() {
    const suggestedName = 'Superuser';

    // With setValue you have to set the entire form values
    // this.signupForm.setValue({
    //   userData: { username: 'User One', email: 'userOne@gmail.com' },
    //   secret: 'pet',
    //   quesitonAnswer: 'Optimus',
    //   gender: 'male',
    // });

    // But with the patchValue, you only have to set the specified value and it does not overrite the other values!!!
    this.signupForm.form.patchValue({
      userData: { username: suggestedName },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    this.formSubmitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.quesitonAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.resetForm();
  }
}
