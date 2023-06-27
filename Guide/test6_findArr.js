//indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าไม่เจอจะได้ -1)
//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าไม่เจอจะได้ undefined
//findIndex(ข้อมูล) => ผลของการค้นหาจะได้ตำแหน่งของ Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ["red","green","blue","purple","white"];

let index = colors.indexOf("blue");
let search = colors.find(element => element==="yellow");
let found = colors.findIndex(element=>element=="green");

console.log(index);
console.log(search);
console.log(found);
