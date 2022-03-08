import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPokedexComponent } from './main-pokedex.component';
import { PokedexPickComponent } from './pokedex-pick/pokedex-pick.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
  ],
  declarations: [MainPokedexComponent, PokedexPickComponent],
  exports: [MainPokedexComponent, PokedexPickComponent],
})
export class MainPokedexModule {}
