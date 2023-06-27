const data = [10,20,30,40];

const mapData = data.map(e=>e*100);
const filterData = data.filter(e=>e>20);

//array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น) // value = 10

const reduceData = data.reduce((value,element)=>{
    const total = element+value;
    return total;
},0)

console.log(mapData);
console.log(filterData);
console.log(reduceData);