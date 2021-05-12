import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddvampireComponent } from './addvampire.component';

const routes: Routes = [{ path: '', component: AddvampireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddvampireRoutingModule { }
