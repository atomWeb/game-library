import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { GameList } from '../interfaces/game-list.interface';
import { Game } from '../interfaces/game.interface';
import { NewGame } from '../interfaces/new-game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameserviceService {
  constructor(private http: HttpClient) {}

  getAllGames(): Observable<Game[]> {
    const userArr = localStorage.getItem('auth-user')?.split("|") || "";
    const userProfileId = userArr[1];
    return this.http
      .get<GameList>(`${environment.apiurl.apiurlbase}/games/${userProfileId}`)
      .pipe(map((res) => res.data));
  }

  getGame(gameId: string): Observable<Game[]> {
    return this.http
      .get<GameList>(`${environment.apiurl.apiurlbase}/game/${gameId}`)
      .pipe(map((res) => res.data));
  }

  createGame(body: NewGame): Observable<any> {
    return this.http.post<NewGame>(
      `${environment.apiurl.apiurlbase}/game`, body);
  }
}
