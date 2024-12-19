// Access Map Elements
// You can access Map elements using the get() method. For example,

const mapData = new Map();

mapData.set("NumArray", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("map data :", mapData.get("NumArray"));

// you can use the has() method to check if the element is in a Map. For example,

console.log("has method :", mapData.has("NumArray"));

// Removing Elements
// You can use the clear() and the delete() method to remove elements from a Map.

// The delete() method returns true if a specified key/value pair exists and has been removed or else returns false

console.log("delete method :", mapData.delete("NumArray"));

// clear() method example

const mapData2 = new Map();

mapData2.set("fruits Array", ["apple", "banana", "mango", "grapes"]);

console.log("map data for fruits :", mapData2.get("fruits Array"));

// now i want to clear fruits array

console.log(
  "it will clear all key value pair available in mapData2 :",
  mapData2.clear()
);

// now if i want to check is there any key/values pair available in mapData2

console.log("fruits Array :", mapData2.get("fruits Array"));

// JavaScript Map Size
// You can get the number of elements in a Map using the size property.

//  example,

const mapData3 = new Map();

mapData3.set("numArray", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

mapData3.set("fruits Array", ["apple", "banana", "mango", "grapes"]);

console.log("mapdata 3 size is :", mapData3.size);
