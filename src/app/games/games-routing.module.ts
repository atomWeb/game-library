import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { GamesHomeComponent } from './games-home/games-home.component';
import { AddGameComponent } from './add-game/add-game.component';

const routes: Routes = [
  {
    path: '',
    component: GamesHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-game',
    component: AddGameComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class GamesRoutingModule {}
