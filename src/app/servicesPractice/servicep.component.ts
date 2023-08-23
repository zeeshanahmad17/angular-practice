import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-servicep',
  templateUrl: './servicep.component.html',
  styleUrls: ['./servicep.component.css'],
})
export class ServicepComponent implements OnInit {
  accounts: { name: string; status: string }[];
  constructor(private accountsService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
