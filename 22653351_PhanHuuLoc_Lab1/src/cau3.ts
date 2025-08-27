class Car {
    brand: string;
    model: String;
    year: number;

    constructor(brand:string, model: string, year:number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }

}
    const c1 = new Car("Honda", "A", 2024);
    c1.displayInfo();