import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PokedexPickComponent } from './pokedex-pick/pokedex-pick.component';

@Component({
  selector: 'app-main-pokedex',
  templateUrl: './main-pokedex.component.html',
  styleUrls: ['./main-pokedex.component.scss'],
})
export class MainPokedexComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(PokedexPickComponent);
  }

  ngOnInit() {}
}
