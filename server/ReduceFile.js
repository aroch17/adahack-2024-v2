
input_json_file = [{
    cuisine: "x",
    price: 0,
    distance: 3
  },
  {
    cuisine: "z",
    price: 3,
    distance: 3
  },
  {
    cuisine: "y",
    price: 0,
    distance: 3
  },
];
  

var countPropertyValues = {};
input_json_file.forEach(function(obj) {
  if (countPropertyValues.hasOwnProperty(obj.cuisine)) {
    countPropertyValues[obj.cuisine]++;
  } else {
    countPropertyValues[obj.cuisine] = 1;
  }
});


var maxPropertyOccurence=0;
var maxPropertyValue;

for(var property in countPropertyValues){

    if(countPropertyValues[property]>maxPropertyOccurence){
      maxPropertyOccurence=countPropertyValues[property];
      maxPropertyValue=property;
    }
}

console.log(maxPropertyValue);
const cuisine = maxPropertyValue;


var priceSum = 0;
var distanceSum = 0;

input_json_file.forEach(function(obj) {
      priceSum += obj.price;
      distanceSum += obj.distance
  });

console.log(priceSum);
console.log(distanceSum);

const distance = distanceSum/input_json_file.length;
const priceNum = Math.round(priceSum/input_json_file.length);
const price = ["PRICE_LEVEL_INEXPENSIVE", "PRICE_LEVEL_MODERATE", "PRICE_LEVEL_EXPENSIVE"][priceNum-1];

console.log(distance);
console.log(price);



