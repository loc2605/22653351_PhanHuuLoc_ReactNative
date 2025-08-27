class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    calculateArea(): number{
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
    displayInfo(): void {
        console.log(`Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`);
    }
}

    const r1 = new Rectangle(5, 10);
    r1.displayInfo();