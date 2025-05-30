import { Player } from './playerSchema';

export interface GameState {
    id: string;
    players: Player[];
    spectators: Player[];
    createdAt: number;
}