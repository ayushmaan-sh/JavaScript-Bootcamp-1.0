// In JavaScript, classes are a way to define blueprints for creating objects (these objects are different from the objects defined in the last section).

class Rectangle{
    constructor(height, width, color){
        this.height = height,
        this.width = width,
        this.color = color
    }

    area(){
        const area = this.width*this.height;
        return area
    }

    color(){
        console.log(`Painting with color: ${this.color}`)
    }
}

const rect = new Rectangle(2,4)
const rectArea = rect.area()
console.log("Area of Rectangle:",rectArea)