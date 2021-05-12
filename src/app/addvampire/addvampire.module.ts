import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddvampireRoutingModule } from './addvampire-routing.module';
import { AddvampireComponent } from './addvampire.component';


@NgModule({
  declarations: [AddvampireComponent],
  imports: [
    CommonModule,
    AddvampireRoutingModule
  ]
})
export class AddvampireModule { }
