const data = [10, 20, 30, 40];
const data2 = [
    { name: "KaminariSora", salary: 25500, department: "programmer" },
    { name: "Baitarn", salary: 65500, department: "none" },
    { name: "Tonkla", salary: 95000, department: "programmer" }
]
//half method
const result = data.filter(e => e > 20);
//full method
const result2 = data2.filter(e=>{
    return e.salary>30000;
}).filter(e=>e.department=="programmer")

console.log(result);
console.log(result2);