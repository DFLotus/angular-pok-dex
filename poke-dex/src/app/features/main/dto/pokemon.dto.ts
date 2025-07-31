import { StatType } from "../enums/pokemon-state-state.enum";

export interface PokemonDTO {
    name: string;
    abilities: any[];
    cryUrl: string;
    height: number;
    weight: number;
    id: number;
    sprites: any;
    stats: any;
    types: any[];
}