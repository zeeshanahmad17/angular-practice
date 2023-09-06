import { Component, OnInit } from '@angular/core';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-services-assignment',
  templateUrl: './servicesAssignment.component.html',
  styleUrls: ['./servicesAssignment.component.css'],
})
export class ServicesAssignmentComponent implements OnInit {
  activeUsers: string[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

}
