import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
[
  { path: 'bynight', loadChildren: () => import('./bynight/bynight.module').then(m => m.BynightModule) },
  { path: 'vampires', loadChildren: () => import('./vampires/vampires.module').then(m => m.VampiresModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
