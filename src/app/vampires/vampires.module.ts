import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VampiresRoutingModule } from './vampires-routing.module';
import { VampiresComponent } from './vampires.component';


@NgModule({
  declarations: [VampiresComponent],
  imports: [
    CommonModule,
    VampiresRoutingModule
  ]
})
export class VampiresModule { }
