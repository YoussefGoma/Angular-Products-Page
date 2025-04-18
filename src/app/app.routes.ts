import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
// import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FakeStoreComponent } from './fake-store/fake-store.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: SettingsComponent},
    {path: 'about', component:AboutComponent},
    {path: 'categories', component:CategoriesComponent},
    {path: 'products', component:FakeStoreComponent},
    {path: '**', component:NotFoundComponent}
];
