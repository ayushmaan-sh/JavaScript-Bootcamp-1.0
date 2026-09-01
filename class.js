// In JavaScript, classes are a way to define blueprints for creating objects (these objects are different from the objects defined in the last section).

class Shape{
    constructor(color){
        this.color = color
    }

    paint(){
        console.log("Painting the shape with",this.color)
        return this.color
    }
}

// Inheritance in JavaScript classes allows one class to inherit properties and methods from another class. This mechanism enables code reuse, making it easier to create new classes that are based on existing ones, without having to duplicate code.

class Rectangle extends Shape{
    constructor(height, width, color){
        super(color) //call the constructor of parent (super) class.
        this.height = height
        this.width = width
    }

    area(){
        const area = this.width*this.height;
        return area
    }

    perimeter(){
        const prm = 2 * (this.width + this.height)
        return prm
     }
}

class Circle extends Shape{
    constructor(radius, color){
        super(color)
        this.radius = radius
    }

    area(){
        return 3.14 * this.radius * this.radius
    }
}

const rect = new Rectangle(2,4,"Black") 
const rectArea = rect.area()
const rectColor = rect.paint()

const circle = new Circle(2, "Blue")
const circleArea = circle.area()
const circleColor = circle.paint()

console.log("Area of Rectangle:",rectArea,"| Color :",rectColor)
console.log("Area of Circle:",circleArea,"| Color :",circleColor)