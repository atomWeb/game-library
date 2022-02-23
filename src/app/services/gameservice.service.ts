import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { GameList } from '../interfaces/game-list.interface';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameserviceService {
  constructor(private http: HttpClient) {}

  getAllGames(): Observable<Game[]> {
    return this.http
      .get<GameList>(`${environment.apiurl.apiurlbase}/games`)
      .pipe(map((res) => res.data));
  }
}
