import { Routes } from '@angular/router';
import { Projects } from './projects/projects';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: Home, title: 'Matthew Beres - Home'
    },
    {
        path: 'projects', component: Projects, title: 'Matthew Beres - Projects'
    },
];