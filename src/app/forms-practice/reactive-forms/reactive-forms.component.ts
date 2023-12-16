import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenNames = ['Huzi', 'Hari'];
  forbiddenEmails = ['test@gmail.com', 'testing@gmail.com'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.foriddenNamesValidator.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmailValidator.bind(this)
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    // this.signupForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
    this.signupForm.statusChanges.subscribe((data) => {
      console.log(data);
    });

    // ------------------- Setting and Patching Values --------------------------------
    // the same we used to do in TD Forms
    this.signupForm.patchValue({
      userData: {
        username: 'testing',
      },
    });
  }

  onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(
      new FormControl(null, Validators.required)
    );
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log('--------------------------------');
    console.log(this.signupForm.value);
  }

  // --------------------- Custom Validators --------------------------------
  foriddenNamesValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { isForbiddenName: true };
    } else {
      return null;
    }
  }

  // async validator
  forbiddenEmailValidator(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const proimse = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenEmails.indexOf(control.value) > -1) {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return proimse;
  }
}
