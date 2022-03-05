import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module'

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddGameComponent } from './add-game/add-game.component';
import { GamesHomeComponent } from './games-home/games-home.component';
import { GameComponent } from './game/game.component';
import { GameListComponent } from './game-list/game-list.component';
import { ImageUploaderComponent } from '../shared/image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    ImageUploaderComponent,
    GamesHomeComponent,
    AddGameComponent,
    GameComponent,
    GameListComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatTabsModule,
    MatTooltipModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
})
export class GamesModule {}
