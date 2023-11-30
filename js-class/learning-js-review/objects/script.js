const founded = "2013";
let obj = {
  sport: "Competitive Skateboarding",
  founded,
  "Year of Foundation": founded,
  founder: "Tim McFerran",
  country: "United States",
  "Official website": "http://www.google.com",
};

const discoveredBy = "Discovered by";
obj = {
  ...obj,
  [discoveredBy]: founded,
  discoveredBy,
};

let user = {
  name: "Felipe",
  surname: "Roque",
};
user.name = "Nicolas";
delete user.surname;

function isEmpty(obj) {
  return Object.keys(obj) == 0;
}

let test = {};
console.log("test", test);
console.log("isEmpty", isEmpty(test));

test.test = "test";
console.log("test", test);
console.log("isEmpty", isEmpty(test));

delete test.test;
console.log("test", test);
console.log("isEmpty", isEmpty(test));
