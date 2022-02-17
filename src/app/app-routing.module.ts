import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './pages/games/games.component';
import { AddGameComponent } from './pages/add-game/add-game.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
  },
  {
    path: 'add-game',
    component: AddGameComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
