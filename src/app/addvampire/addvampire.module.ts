import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddvampireRoutingModule } from './addvampire-routing.module';
import { AddvampireComponent } from './addvampire.component';

@NgModule({
  declarations: [AddvampireComponent],
  imports: [
    CommonModule,
    AddvampireRoutingModule, FormsModule
  ]
})
export class AddvampireModule { }
