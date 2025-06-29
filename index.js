// Initial array of cats
let cats = ["Milo", "Otis", "Garfield"];

// Destructive methods
function destructivelyAppendCat(name) {
  cats.push(name);
  return cats; // Return the modified array
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats; // Return the modified array
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats; // Return the modified array
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats; // Return the modified array
}

// Nondestructive methods
function appendCat(name) {
  return [...cats, name]; // Return a new array with the cat added
}

function prependCat(name) {
  return [name, ...cats]; // Return a new array with the cat added
}

function removeLastCat() {
  return cats.slice(0, -1); // Return a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1); // Return a new array without the first cat
}

