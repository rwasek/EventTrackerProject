import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TrailrunService } from './services/trailrun.service';
import { TrailrunListComponent } from './components/trailrun-list/trailrun-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddRunComponent } from './components/add-run/add-run.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailrunListComponent,
    NotFoundComponent,
    AddRunComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TrailrunService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
