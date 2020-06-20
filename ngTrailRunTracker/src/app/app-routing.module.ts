import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailrunListComponent } from './components/trailrun-list/trailrun-list.component';
import { AddRunComponent } from './components/add-run/add-run.component';
import { NotFoundComponent } from './components/not-found/not-found.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'trailrun'},
  { path: 'trailrun', component: TrailrunListComponent },
  { path: 'addrun', component: AddRunComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
