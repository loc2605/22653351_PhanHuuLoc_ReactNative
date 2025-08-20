class Book{
    title: string;
    author: string;
    year: number;
    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displayInfo(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}
const b1 = new Book("Sherlock Homles", "Conan", 1925);
b1.displayInfo();