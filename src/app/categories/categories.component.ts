import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Latest gadgets and electronic devices for everyday use and entertainment",
      imageUrl: "https://placehold.co/600x400/2c3e50/ffffff?text=Electronics"
    },
    {
      id: 2,
      name: "Home & Kitchen",
      description: "Quality products to enhance your living space and cooking experience",
      imageUrl: "https://placehold.co/600x400/27ae60/ffffff?text=Home+%26+Kitchen"
    },
    {
      id: 3,
      name: "Sports & Outdoors",
      description: "Equipment and gear for all your fitness and outdoor adventure needs",
      imageUrl: "https://placehold.co/600x400/e74c3c/ffffff?text=Sports+%26+Outdoors"
    },
    {
      id: 4,
      name: "Fashion",
      description: "Trendy clothing, accessories, and footwear for all occasions",
      imageUrl: "https://placehold.co/600x400/9b59b6/ffffff?text=Fashion"
    }
  ];
}
