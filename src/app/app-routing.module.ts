import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular';

import { HomeComponent } from './pages/home/home.component'
import { GamesComponent } from './pages/games/games.component';
import { AddGameComponent } from './pages/add-game/add-game.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,    
  },
  {
    path: 'games',
    component: GamesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-game',
    component: AddGameComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
