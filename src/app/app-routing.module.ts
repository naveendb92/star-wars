import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PlanetComponent } from "./components/planet/planet.component";
import { FavoriteComponent } from "./components/favorite/favorite.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    data: { title: "Dashboard" }
  },
  { path: "planet", component: PlanetComponent, data: { title: "Planet" } },
  {
    path: "favorites",
    component: FavoriteComponent,
    data: { title: "Favorites" }
  },
  { path: "", redirectTo: "/planet", pathMatch: "full" },
  { path: "**", redirectTo: "/planet", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
