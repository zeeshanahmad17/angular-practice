import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routingPractice/home/home.component';
import { EditServerComponent } from './routingPractice/servers/edit-server/edit-server.component';
import { ServerComponent } from './routingPractice/servers/server/server.component';
import { ServersComponent } from './routingPractice/servers/servers.component';
import { UserComponent } from './routingPractice/users/user/user.component';
import { UsersComponent } from './routingPractice/users/users.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './routingPractice/not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './routingPractice/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './routingPractice/error-page/error-page.component';
import { ServerResolver } from './routingPractice/servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Ah snap! Page Not Found!!!' },
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
