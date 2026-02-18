import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- add this

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {

 products = [
  { name: 'Rose Gold', price: 150, available: true, category: 'Food', image: '/rosegold.jpg' },
  { name: 'Pearl Charm', price: 99, available: true, category: 'Food', image: '/pearlcharm.jpg' },
  { name: 'Crystal Heart', price: 120, available: true, category: 'Drinks', image: '/crystalheart.jpeg' },
  { name: 'Gold', price: 150, available: false, category: 'Food', image: '/gold.jpg' },
  { name: 'Silver', price: 150, available: false, category: 'Food', image: '/silver.jpg' },

];


  cart: any[] = [];
  selectedCategory: string = 'All';

get filteredProducts() {
  if (this.selectedCategory === 'All') {
    return this.products;
  }
  return this.products.filter(
    product => product.category === this.selectedCategory
  );
}


  addToCart(product: any) {
    if (!product.available) {
      alert(`${product.name} is out of stock!`);
      return;
    }
    this.cart.push(product);
    alert(`${product.name} added to cart!`);
  }

  get cartCount(): number {
  return this.cart.length;
}

get totalPrice(): number {
  return this.cart.reduce((total, item) => total + item.price, 0);
}

removeFromCart(index: number) {
  this.cart.splice(index, 1);
}

}