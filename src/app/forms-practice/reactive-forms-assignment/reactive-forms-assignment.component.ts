import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Validators
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-reactive-forms-assignment',
  templateUrl: './reactive-forms-assignment.component.html',
  styleUrls: ['./reactive-forms-assignment.component.css'],
})
export class ReactiveFormsAssignmentComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.forbiddenProjectNames],
        CustomValidators.asyncForbiddenProjectName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('critical'),
    });
  }
  onSubmit() {
    console.log(this.projectForm.value);
  }
}
