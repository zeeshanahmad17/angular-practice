import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
    selector: 'app-routing-practice',
    templateUrl: './routingPractice.component.html',
    styleUrls: ['./routingPractice.component.css']
})
export class RoutingPracticeComponent {
    isLoggedIn: boolean = false
    constructor(private authService: AuthService) { }

    onLogin() {
        this.authService.login()
        this.isLoggedIn = true;
    }

    onLogout() {
        this.authService.logout()
        this.isLoggedIn = false;
    }
}