import { Routes } from '@angular/router';

// importing routing compoz.......
import {HomeComponent} from './components/home/home.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'home-component', component: HomeComponent },
    { path: 'gallery-component', component: GalleryComponent },
    { path: 'contact-component', component: ContactComponent },
    { path: 'about-component', component: AboutComponent },

    { path: '', redirectTo: '/home-component', pathMatch: 'full'  },
    { path: '**', component: NotFoundComponent, pathMatch: 'full'},
];
