import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NopagefoudComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./games/games.module').then((m) => m.GamesModule),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NopagefoudComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
