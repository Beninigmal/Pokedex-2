import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokedex-pick',
  templateUrl: './pokedex-pick.component.html',
  styleUrls: ['./pokedex-pick.component.scss'],
})
export class PokedexPickComponent implements OnInit {
  pokemons: any = [];
  page = 1;
  totalPokemons: number = 0;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<PokedexPickComponent>,
    private dataApi: PokeapiService
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.dataApi.getPokemons(9, this.page + 0).subscribe((response: any) => {
      this.totalPokemons = response.count;
      response.results.forEach((result: any) => {
        this.dataApi
          .getPokemonData(result.name)
          .subscribe((DataResponse: any) => {
            this.pokemons.push({ DataResponse, cols: 1, rows: 1 });
            console.log(this.pokemons);
          });
      });
    });
  }
}
