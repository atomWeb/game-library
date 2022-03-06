import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Game } from '../interfaces/game.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GameserviceService } from './gameservice.service';
import { first } from 'rxjs/operators';

@Injectable()
export class GameResolver implements Resolve<Game> {
  constructor(private games: GameserviceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Game> {
    const gameUrl = route.paramMap.get('gameUrl') || '';
    return this.games.getGame(gameUrl);
  }
}
