import { PokemonDTO } from "../../features/main/dto/pokemon.dto";

/**
 * Adapter class to transform raw Pokémon API responses
 * into a structured `PokemonDTO` used within the application.
 */
export class PokemonResponseAdapter {
    /**
     * Transforms a raw API response into a `PokemonDTO` object.
     *
     * @param response - Raw JSON response from the Pokémon API.
     * @returns A `PokemonDTO` containing only the relevant fields.
    */
    public static filterPokeData(response: any): PokemonDTO {
        return {
            name: response.name,
            abilities: response.abilities,
            cryUrl: response.cries.latest,
            height: response.height,
            weight: response.weight,
            id: response.id,
            sprites: response.sprites,
            stats: response.stats,
            types: response.types
        }
    }
}