import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
[
  { path: 'bynight', loadChildren: () => import('./bynight/bynight.module').then(m => m.BynightModule) },
  { path: 'vampires', loadChildren: () => import('./vampires/vampires.module').then(m => m.VampiresModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./addvampire/addvampire.module').then(m => m.AddvampireModule) },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
{ path: 'start', loadChildren: () => import('./start/start.module').then(m => m.StartModule) },
{ path: 'addvampire', loadChildren: () => import('./addvampire/addvampire.module').then(m => m.AddvampireModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
