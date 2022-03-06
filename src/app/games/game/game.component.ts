import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../interfaces/game.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  game!: Game;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.game = this.route.snapshot.data['game'];
  }
}
