var person={
    firstname:"podduturi",
    lastname:"vennele",
    age:23
}
person.city="New York"
console.log(person)

// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.


var product={
    name:"laptop",
    price:10000,
    instock:true
}
product.price=200;
delete product.instock;
console.log(product)

// .Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.

var library={
    fantacy:{
        books:["it","the shining","dracula"]
    },
    mystery:{
        books:["A brief history of time","the selfish gene","cosmos"]
    },
    history:{
        books:["sapiens","the history of the ancient world","guns,germs,and steel"]
    }
};
library.philosophy={
    books:["the republic","meditations"]
};
console.log(library.fantacy.books[0])
delete library.mystery
console.log(library)

// Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.
var user={
    username:"vennela",
    email:"poduturivennela@2gmail.com",
    address:{
        city:"karimnagar",
        state:"Telangana",
        zip:505468

    }
}
Object.freeze(user);
user.email="akki@gamil.com"
console.log(Object.isFrozen(user))
user.phone=23456789
console.log(user)

// Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()

var car={
    make:"toyata",
    model:"camry",
    price:40000
};
Object.seal(car);
delete car.make
console.log(Object.isSealed(car));
car.price="50000",
Object.isExtensible(car)
console.log(car)

const store = {
    name: "SuperMart",
    products: {
      electronics: {
        phones: {
          apple: {
            iPhoneX: { price: 999, stock: 20 },
            iPhone12: { price: 1099, stock: 15 },
          },
          samsung: {
            galaxyS21: { price: 799, stock: 25 },
            galaxyNote20: { price: 999, stock: 10 },
          },
        },
        laptops: {
          dell: {
            XPS13: { price: 1200, stock: 10 },
            Inspiron15: { price: 800, stock: 30 },
          },
          hp: {
            SpectreX360: { price: 1300, stock: 5 },
            Pavilion15: { price: 750, stock: 20 },
          },
        },
      },
      groceries: {
        fruits: {
          apples: { price: 2, stock: 100 },
          bananas: { price: 1, stock: 150 },
        },
        vegetables: {
          carrots: { price: 1.5, stock: 200 },
          spinach: { price: 1, stock: 100 },
        },
      },
    },
  };
  console.log(store.products.groceries.vegetables.spinach.stock)
  console.log(store.products.electronics.laptops.hp.Pavilion15.price)
  
//   Console.log the spinach stock and console .log the hp Pavilion15 price
  