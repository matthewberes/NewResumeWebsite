import { Routes } from '@angular/router';
import { Resume } from './resume/resume';
import { Projects } from './projects/projects';
import { Home } from './home/home';
import { Degree } from './degree/degree';

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
    {
        path: 'resume', component: Resume, title: 'Matthew Beres - Resume'
    },
    {
        path: 'degree', component: Degree, title: 'Matthew Beres - Degree'
    }
];