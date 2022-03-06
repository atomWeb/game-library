import { Game } from './game.interface';
export interface GameList {
  data: Game[];
  nextToken: string;
}
