import { Routes } from '@angular/router';
import { Projects } from './projects/projects';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', component: Home, title: 'Matthew Beres - Full-Stack Developer'
    },
    {
        path: 'projects', component: Projects, title: 'Matthew Beres - Projects'
    },
    {
        path: '**', component: NotFound, title: '404 - Page Not Found'
    }
];