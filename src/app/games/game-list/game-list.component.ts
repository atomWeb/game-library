import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../interfaces/game.interface';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {

  @Input()
  games!: Game[] | null;

  constructor() {}

  ngOnInit(): void {}

  showGame(gid: string): void {
    //(click)="showGame(game.id)" en el html
    console.log(gid)
  }
}
