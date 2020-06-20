import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailrunListComponent } from './components/trailrun-list/trailrun-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'trailrun'},
  { path: 'trailrun', component: TrailrunListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
