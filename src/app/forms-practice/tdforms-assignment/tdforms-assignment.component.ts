import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdforms-assignment',
  templateUrl: './tdforms-assignment.component.html',
  styleUrls: ['./tdforms-assignment.component.css'],
})
export class TdformsAssignmentComponent {
  @ViewChild('f') assignmentForm: NgForm;
  email: string;
  subscription: string[] = ['Basic', 'Advance', 'Pro'];
  selectedSubscription: string = 'Advance';

  onSubmit() {
    console.log(this.assignmentForm.value);
  }
}
