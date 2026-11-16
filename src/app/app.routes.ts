import { Routes } from '@angular/router';

import { HomePage } from './home-page/home-page';
import { StitchesPage } from './stitches-page/stitches-page';
import { PatternPage } from './pattern-page/pattern-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'stitches/:index',
        component: StitchesPage
    },
    {
        path: 'patterns/:index',
        component: PatternPage
    }
];
