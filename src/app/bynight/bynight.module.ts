import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BynightRoutingModule } from './bynight-routing.module';
import { BynightComponent } from './bynight.component';


@NgModule({
  declarations: [BynightComponent],
  imports: [
    CommonModule,
    BynightRoutingModule
  ]
})
export class BynightModule { }
