import { Observable } from "rxjs";
import { PokemonDTO } from "../../features/main/dto/pokemon.dto";

export class PokemonResponseAdapter {
    static filterPokeData(response: any): PokemonDTO {
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