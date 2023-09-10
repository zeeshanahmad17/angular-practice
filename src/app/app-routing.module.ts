import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./routingPractice/home/home.component";
import { EditServerComponent } from "./routingPractice/servers/edit-server/edit-server.component";
import { ServerComponent } from "./routingPractice/servers/server/server.component";
import { ServersComponent } from "./routingPractice/servers/servers.component";
import { UserComponent } from "./routingPractice/users/user/user.component";
import { UsersComponent } from "./routingPractice/users/users.component";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./routingPractice/not-found/not-found.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'servers',
        component: ServersComponent,
        children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent },
        ],
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [{ path: ':id/:name', component: UserComponent }],
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }