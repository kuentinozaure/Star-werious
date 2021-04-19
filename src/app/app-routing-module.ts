import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { config } from "./app.config";

const routes: Routes = [
    {
        path: config.routing.home.path,
        data: {},
        loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
    },
    {
        path: config.routing.starship.path,
        data: {},
        loadChildren: () => import('./feature/starship/starship.module').then(m => m.StarshipModule)
    },
    {
        path: config.routing.pilot.path,
        data: {},
        loadChildren: () => import('./feature/pilot/pilot.module').then(m => m.PilotModule)
    },
    {
        path: config.routing.film.path,
        data: {},
        loadChildren: () => import('./feature/film/film.module').then(m => m.FilmModule)
    },
    {
        path:'',
        redirectTo: config.routing.home.path, 
        pathMatch: 'full'
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}