import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './footer/footer.component';
import {NavBarComponent} from './navBar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-root',
  imports: [NgbModule,RouterOutlet,FooterComponent,NavBarComponent,AboutComponent,ProductsComponent,CategoriesComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day1';
  logo = 'images/logo.png'
}
