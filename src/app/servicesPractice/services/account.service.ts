import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor(private loggingService: LoggingService) {}

  onAccountAdded(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logStatus(status);
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatus(newStatus);
  }
}
