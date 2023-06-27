//splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ,สมาชิกที่เข้าไปแทนที่)
//slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)
const data = [1,2,3,4,5];
const data2 = [1,2,3,4,5];

console.log("before = "+data);

data.splice(1,2,999);
const lastData = data2.slice(1,3);

console.log("splice = "+data);
console.log("slice = "+lastData);

// console.log(data.splice(1,3));
