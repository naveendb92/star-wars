import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { PlanetComponent } from "./components/planet/planet.component";
import { FavoriteComponent } from "./components/favorite/favorite.component";
import { DataService } from "./services/data.service";
import { PlanetKpiComponent } from "./components/planet-kpi/planet-kpi.component";
import { DialogBodyComponent } from "./components/dialog-body/dialog-body.component";
import { MoviesKpiComponent } from './components/movies-kpi/movies-kpi.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    PlanetComponent,
    FavoriteComponent,
    PlanetKpiComponent,
    DialogBodyComponent,
    MoviesKpiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule {}
