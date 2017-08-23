import { Injectable } from '@angular/core';
import { Product } from '../Product';
@Injectable()
export class ProductService {

  constructor() { }

  getProducts() {
    const products: Product[] = [];

    products.push(
      new Product('Arduino Mega 2560 R3', 'https://cdn-reichelt.de/bilder/web/xxl_ws/B300/ARDUINO_MEGA_A01.png', '', 45.95, 12, 0, false),
      new Product('Arduino Ethernet Shield 2', 'https://cdn.sparkfun.com//assets/parts/6/6/4/3/11166-01.jpg', '', 44.90, 10, 0, false),
      new Product('Raspberry Pi 3', 'https://cdn.shopify.com/s/files/1/0174/1800/products/Raspberry_Pi_3_1_of_4_711f1ffe-af5e-4923-aa7f-d80651396258_1024x1024.JPG', '', 39.95, 15, 0, false),
      new Product('Crypto Shield', 'https://cdn.sparkfun.com/assets/learn_tutorials/1/3/5/CryptoShield_6.jpg', '', 40.5, 20, 0, false),
    );
    return products;
  }

}
