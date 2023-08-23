import { Component, OnInit } from '@angular/core';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-services-assignment',
  templateUrl: './servicesAssignment.component.html',
  styleUrls: ['./servicesAssignment.component.css'],
})
export class ServicesAssignmentComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
