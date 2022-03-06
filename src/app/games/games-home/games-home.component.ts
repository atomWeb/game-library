import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Game } from '../interfaces/game.interface';
import { GameserviceService } from '../services/gameservice.service';

@Component({
  selector: 'app-games-home',
  templateUrl: './games-home.component.html',
  styleUrls: ['./games-home.component.css'],
})
export class GamesHomeComponent implements OnInit, AfterViewInit {
  games$!: Observable<Game[]>;
  ps4Games$!: Observable<Game[]>;
  switchGames$!: Observable<Game[]>;

  constructor(private gameService: GameserviceService) {}

  ngOnInit(): void {
    this.games$ = this.gameService.getAllGames();
  }

  ngAfterViewInit(): void {
    this.ps4Games$ = this.games$.pipe(
      map((games) => games.filter((game) => game.platform === 'PS4'))
    );
    this.switchGames$ = this.games$.pipe(
      map((games) => games.filter((game) => game.platform === 'NSW'))
    );
  }
}
