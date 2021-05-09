import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VampiresComponent } from './vampires.component';

const routes: Routes = [{ path: '', component: VampiresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VampiresRoutingModule { }
