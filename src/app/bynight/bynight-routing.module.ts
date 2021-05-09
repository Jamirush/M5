import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BynightComponent } from './bynight.component';

const routes: Routes = [{ path: '', component: BynightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BynightRoutingModule { }
