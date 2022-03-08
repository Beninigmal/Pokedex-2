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

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<PokedexPickComponent>,
    private dataApi: PokeapiService
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit() {
    this.dataApi.getPokemons().subscribe((response: any) => {
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
