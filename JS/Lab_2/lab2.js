// 1.2.3 new Object()
let car1 = new Object();
car1.color = "blue";
car1.maxSpeed = 140;
car1.driver = {
    name: "Andrii Taras",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

// 1.2.4 за допомогою літерала об'єкта
let car2 = {
    color: "red",
    maxSpeed: 100,
    driver: {
        name: "Andrii Taras",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

// 1.2.5 метод drive до car1
car1.drive = function() {
    console.log("I am not driving at night");
};
car1.drive();

// 1.2.6 метод drive до car2
car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive();

// 1.2.7 конструктор Truck
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

// 1.2.8 метод AssignDriver до прототипу Truck
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// 1.2.9 метод trip до конструктора Truck
Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
        return;
    }
    
    let message = `Driver ${this.driver.name} `;
    message += this.driver.nightDriving ? "drives at night" : "does not drive at night";
    message += ` and has ${this.driver.experience} years of experience.`;
    
    console.log(message);
};

// 1.2.10 об'єкти Truck та демонстрація роботи trip
let truck1 = new Truck("black", 5000, 80.5, "Volvo", "FH16");
let truck2 = new Truck("white", 4500, 75.3, "Mercedes", "Actros");

truck1.AssignDriver("Andrii Taras", true, 10);
truck2.AssignDriver("Andrii Taras", false, 5);

truck1.trip();
truck2.trip();

// 1.2.12-1.2.15: Клас Square
class Square {
    constructor(a) {
        this.a = a;
    }
    static help() {
        console.log("It has 4 sides and 4 vertices. Its sides are equal in length. All interior angles are equal and right angles, which means that each angle measures 90°. The sum of all the interior angles is 360°. Its two diagonals bisect each other at right angles");
    }
    length() {
        console.log(`Perimeter: ${4 * this.a}`);
    }
    square() {
        console.log(`Area: ${this.a * this.a}`);
    }
    info() {
        console.log(`Square:
        Sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}
        Angles: 90°, 90°, 90°, 90°
        Perimeter: ${4 * this.a}
        Area: ${this.a * this.a}`);
    }
}

// 1.2.16-1.2.17: Клас Rectangle
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    static help() {
        console.log("A rectangle is a quadrilateral with opposite sides equal and four right angles.");
    }
    length() {
        console.log(`Perimeter: ${2 * (this.a + this.b)}`);
    }
    square() {
        console.log(`Area: ${this.a * this.b}`);
    }
    info() {
        console.log(`Rectangle:
        Sides: ${this.a}, ${this.b}, ${this.a}, ${this.b}
        Angles: 90°, 90°, 90°, 90°
        Perimeter: ${2 * (this.a + this.b)}
        Area: ${this.a * this.b}`);
    }
}

// 1.2.18-1.2.19: Клас Rhombus
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }
    static help() {
        console.log("A rhombus is a quadrilateral with four equal sides and opposite angles equal.");
    }
    info() {
        console.log(`Rhombus:
        Sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}
        Angles: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
        Perimeter: ${4 * this.a}
        (Formula-based area calculation required for accuracy)`);
    }
}

// 1.2.20-1.2.21: Клас Parallelogram
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }
    static help() {
        console.log("A parallelogram is a quadrilateral with opposite sides equal and opposite angles equal.");
    }
    info() {
        console.log(`Parallelogram:
        Sides: ${this.a}, ${this.b}, ${this.a}, ${this.b}
        Angles: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
        Perimeter: ${2 * (this.a + this.b)}
        (Formula-based area calculation required for accuracy)`);
    }
}

// 1.2.22: Додавання геттери та сеттери до Rhombus
class ExtendedRhombus extends Rhombus {
    get side() { return this.a; }
    set side(value) { this.a = value; }
    get angleAlpha() { return this.alpha; }
    set angleAlpha(value) { this.alpha = value; }
    get angleBeta() { return this.beta; }
    set angleBeta(value) { this.beta = value; }
}

// 1.2.23: Виклик статичних методів help
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// 1.2.24: Створення об'єктів і виклик info
let square = new Square(5);
square.info();

let rectangle = new Rectangle(4, 6);
rectangle.info();

let rhombus = new Rhombus(5, 120, 60);
rhombus.info();

let parallelogram = new Parallelogram(4, 6, 120, 60);
parallelogram.info();

// 1.2.25 Функція Triangular
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

// 1.2.26 Створення об'єктів трикутників
const triangle1 = Triangular();
const triangle2 = Triangular(61, 82, 101);
const triangle3 = Triangular(5, 12, 1322);

console.log(triangle1, triangle2, triangle3);

// 1.2.27 Функція PiMultiplier
function PiMultiplier(multiplier) {
    return function() {
        return Math.PI * multiplier;
    };
}

// 1.2.28 Створення функцій для множення на Pi
const multiplyBy2 = PiMultiplier(2);
const multiplyByThreeHalves = PiMultiplier(3 / 2);
const divideBy2 = PiMultiplier(1 / 2);

console.log(multiplyBy2(), multiplyByThreeHalves(), divideBy2());

// 1.2.29 Функція Painter
function Painter(color) {
    return function(obj) {
        if (obj.type) {
            console.log(`${color} ${obj.type}`);
        } else {
            console.log("No ‘type’ property occurred!");
        }
    };
}

// 1.2.30 Створення функцій фарбування
const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

// 1.2.31 Тестові об'єкти
const obj1 = { maxSpeed: 280, color: "magenta" };
const obj2 = { type: "Truck", maxSpeed: 180, loadCapacity: 2400 };
const obj3 = { type: "Sportcar", avgSpeed: 90, color: "purple", isCar: true };

// Демонстрація роботи функцій фарбування
PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);
