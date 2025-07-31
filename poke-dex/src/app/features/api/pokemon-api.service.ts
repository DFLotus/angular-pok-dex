import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PokemonApiService {
    /**
     * Initialize https object on service instantiation
    */
    constructor(private https: HttpClient) { }

    /**
     * GET method to return a query of pokemon from API call
     * @param - name or id of pokemon to query
     * @return - observable to subscribe. A promise
    */
    public getPokemonByName(nameOrId: string): Observable<any> {
        return this.https.get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    }
}