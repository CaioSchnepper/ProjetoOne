import { Routes } from '@angular/router';
import { PlantaComponent } from './components/planta/planta.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path:"", component:HomeComponent
    },
    {
        path:"planta", component:PlantaComponent
    },
    {
        path:"**", redirectTo:""
    }
];
