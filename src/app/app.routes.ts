import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SpecialComponent } from './pages/special/special.component';
import { EventsComponent } from './pages/events/events.component';
import { ChefsComponent } from './pages/chefs/chefs.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component:HeroComponent,
        title: 'Delicious | Hero',
    },
    {
        path: 'about',
        component:AboutComponent,
        title: 'Delicious | About',
    },
    {
        path: 'menu',
        component:MenuComponent,
        title: 'Delicious | Menu',
    },
    {
        path: 'special',
        component:SpecialComponent,
        title: 'Delicious | Specials',              
    },
    {
        path: 'events',
        component:EventsComponent,
        title: 'Delicious | Events',
    },
    {
        path: 'chefs',
        component:ChefsComponent,
        title: 'Delicious | Chefs',
    },
    {
        path: 'gallery',
        component:GalleryComponent,
        title: 'Delicious | Gallery',
    },
    {
        path: 'contact',
        component:ContactComponent,
        title: 'Delicious | Contact',
    },
    {
        path: 'dashboard',
        component:DashboardComponent,
        title: 'Delicious | Dashboard',
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch: 'full'
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch: 'full'
    }

];