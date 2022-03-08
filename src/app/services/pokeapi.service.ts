import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number) {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  getPokemonData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
