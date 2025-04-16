import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // how to dynamiclly use product name to generate image url? unncessary overhead with each change?
  // use ES6 getters to generate image url from product name
  // get imageUrl() { return `https://placehold.co/600x400/2c3e50/ffffff?text=${this.name}`; }
 
  category = input<string>();
  products: Product[];

  get filteredproducts(): Product[] {
    if (this.category()) {
      return this.products.filter(product => product.category === this.category());
    }
    return this.products;
  }

  constructor(service:ProductService) {    
    this.products = service.products;
   }
  }

