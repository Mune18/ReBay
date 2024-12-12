import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  selectedProduct: any = null; // To store the selected product
  products = [
    {
      name: 'Microsoft Xbox Series X 1TB Gaming Console',
      description: 'The ultimate gaming console for next-generation performance.',
      price: 499.99,
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg'
    },
    // Add more products here
  ];

  openProductModal(product: any) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}
