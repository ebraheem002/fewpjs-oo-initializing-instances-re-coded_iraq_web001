// Write your code here
class Breakfast{
  constructor(food,drink){
    this.food = food;
    this.drink = drink;
  }
}

let Breakfast1 = new Breakfast("egg","milk");


class Lunch{
  constructor(salad,soup,drink,){
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

let newlunch = new Lunch("veg salad","adas","soda");


class Dinner{
  constructor(salad,soup,entree,_dessert){
    this.salad = salad;
    this.soup = soup
    this.entree = entree;
    this._dessert = _dessert
  }
}

let dinner1 = new Dinner("nor salad","chicken soup","I don't know","cupcake");
