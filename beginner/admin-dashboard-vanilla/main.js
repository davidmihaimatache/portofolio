let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [...this.stomach, food];
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
speedy.eat("apple");
speedy.eat("apple");
alert(`speedy: ${speedy.stomach}`); // apple

// This one also has it, why? fix please.
alert(`lazy: ${lazy.stomach}`); // apple
