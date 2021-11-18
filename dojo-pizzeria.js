function pizza_Oven (crustType, sauceType, cheeses, toppings){
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza_Rand = {
    crustTypeRand: ["deep dish","thin","thinest","deepest dish"],
    sauseTypeRand: ["traditional","marinara","alfredo","jelly"],
    cheeseTypeRand:["mozzarella","feta","Weißlacker","Olomoucké syrečky"],
    toppingTypeRand:["pepperoni","sausage","pineapple","rocks"],
}


p1 = pizza_Oven("deep dish","traditional","mozzarella","pepperoni")
p2 = pizza_Oven("thin","marinara","feta","sausage")
p3 = pizza_Oven("thinest","alfredo","Weißlacker","pineapple")
p4 = pizza_Oven("deepest dish","jelly","Olomoucké syrečky","rocks")


function random_Pizza (){
    var pizzaRand="";
    pizzaRand= pizzaRand + (pizza_Rand.crustTypeRand[Math.floor(Math.random()*4)]);
    pizzaRand= pizzaRand + " " + (pizza_Rand.sauseTypeRand[Math.floor(Math.random()*4)]);
    pizzaRand= pizzaRand + " " + (pizza_Rand.cheeseTypeRand[Math.floor(Math.random()*4)]);
    pizzaRand= pizzaRand + " " + (pizza_Rand.toppingTypeRand[Math.floor(Math.random()*4)]);
    console.log(pizzaRand);
}

random_Pizza();