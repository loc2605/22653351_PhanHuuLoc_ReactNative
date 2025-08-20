class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  displayInfo(): void {
    console.log(`Sản phẩm: ${this.name}, Giá: ${this.price}`);
  }
}

const products: Product[] = [
  new Product("Bút", 20),
  new Product("Sách", 150),
  new Product("Áo thun", 120),
  new Product("Cặp", 80),
  new Product("Điện thoại", 500)
];

const filteredProducts = products.filter(p => p.price > 100);
console.log("Các sản phẩm có giá > 100:");
filteredProducts.forEach(p => p.displayInfo());
