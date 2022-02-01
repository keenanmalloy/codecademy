const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get _courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const mains = this.getRandomDishFromCourse("mains");
    const desserts = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + mains.price + desserts.price;
    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The price is $${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "bread sticks", 2.99);
menu.addDishToCourse("appetizers", "soup", 3.99);
menu.addDishToCourse("appetizers", "potato skins", 4.99);

menu.addDishToCourse("mains", "top sirloin steak", 29.99);
menu.addDishToCourse("mains", "chicken breast", 20.99);
menu.addDishToCourse("mains", "pork chop", 22.99);

menu.addDishToCourse("desserts", "toffee pudding", 6.99);
menu.addDishToCourse("desserts", "vanilla ice cream", 9.99);
menu.addDishToCourse("desserts", "chocolate cake", 12.99);

const meal = menu.generateRandomMeal();
console.log(meal);
