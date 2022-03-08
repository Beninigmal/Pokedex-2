import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPokedexComponent } from './main-pokedex.component';
import { PokedexPickComponent } from './pokedex-pick/pokedex-pick.component';
import { PaginationComponent } from './pokedex-pick/pagination/pagination.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    NgxPaginationModule,
  ],
  declarations: [
    MainPokedexComponent,
    PokedexPickComponent,
    PaginationComponent,
  ],
  exports: [
    MainPokedexComponent,
    PokedexPickComponent,
    PaginationComponent,
    NgxPaginationModule,
  ],
})
export class MainPokedexModule {}
