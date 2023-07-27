import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.css']
})
export class AssignmentFourComponent {
showSecret =false;
items = []

onToggleDetails(){
  this.showSecret = !this.showSecret;
  this.items.push(new Date())
}
}
