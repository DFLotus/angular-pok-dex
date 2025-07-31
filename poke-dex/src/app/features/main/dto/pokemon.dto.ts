import { StatType } from "../enums/pokemon-state-state.enum";

/**
 * Data Transfer Object representing the necessary properties
 * extracted from the raw Pokémon API response.
 */
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