const numbers = [10,20,30,40,50];
const whether = ["rainy","cloudy","sunny","windy"];

const result = numbers.map(element=>{
    let a = element*2;
    return a;
});

const day = whether.map((e,i)=>{
    return `Day ${i+1} = ${e}`;
})

console.log("Default = "+numbers);
console.log(result);
console.log(day);