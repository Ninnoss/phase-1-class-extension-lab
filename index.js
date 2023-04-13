// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [a, b, c] = this.sides;
    return a + b > c && b + c > a && c + a > b;
  }
}

class Square extends Polygon {
  get isValid() {
    const [side1, side2, side3, side4] = this.sides;
    return side1 === side2 && side2 === side3 && side3 === side4;
  }

  get area() {
    const [side1, , ,] = this.sides;
    return side1 * side1;
  }
}
