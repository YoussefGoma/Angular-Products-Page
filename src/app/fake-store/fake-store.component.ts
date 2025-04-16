import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsComponent } from '../products/products.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-fake-store',
  imports: [ProductsComponent,CategoriesComponent],
  templateUrl: './fake-store.component.html',
  styleUrl: './fake-store.component.css'
})
export class FakeStoreComponent {
  category:string = "jewelery"; 
}
