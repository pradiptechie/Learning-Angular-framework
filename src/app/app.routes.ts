import { Routes } from '@angular/router';

// importing routing compoz.......
import {HomeComponent} from './components/home/home.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, 
    loadChildren : () => import ('./components/home-components/home-components.module').then ((m)=> m.HomeComponentsModule),   
    },


    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full'  },
    { path: '**', component: NotFoundComponent, pathMatch: 'full'},

];
