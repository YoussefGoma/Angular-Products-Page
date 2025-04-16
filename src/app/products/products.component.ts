import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

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

  products: Product[] = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "Premium noise-cancelling headphones with 30-hour battery life and memory foam ear cushions.",
      price: 249.99,
      imageUrl: "https://placehold.co/600x400/2c3e50/ffffff?text=Wireless Bluetooth Headphones"
    },
    {
      id: 2,
      name: "Smartphone Stand and Charger",
      description: "Adjustable aluminum stand with built-in fast wireless charging for all Qi-compatible devices.",
      price: 39.95,
      imageUrl: "https://placehold.co/600x400/27ae60/ffffff?text=Smartphone Stand and Charger"
    },
    {
      id: 3,
      name: "Smart Indoor Plant Sensor",
      description: "Monitors soil moisture, sunlight, temperature, and nutrient levels for your houseplants.",
      price: 29.50,
      imageUrl: "https://placehold.co/600x400/e74c3c/ffffff?text=Smart Indoor Plant Sensor"
    },
    {
      id: 4,
      name: "Portable Power Bank 20000mAh",
      description: "High-capacity power bank with dual USB ports and fast charging capability for multiple devices on the go.",
      price: 54.99,
      imageUrl: "https://placehold.co/600x400/9b59b6/ffffff?text=Portable Power Bank"
    },
    {
      id: 5,
      name: "Stainless Steel Water Bottle",
      description: "Vacuum insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof.",
      price: 34.95,
      imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=Stainless Steel Water Bottle"
    },
    {
      id: 6,
      name: "Bamboo Laptop Desk",
      description: "Adjustable laptop desk made from sustainable bamboo. Features built-in cooling and storage compartments.",
      price: 49.99,
      imageUrl: "https://placehold.co/600x400/e67e22/ffffff?text=Bamboo Laptop Desk"
    }
  ];
}
