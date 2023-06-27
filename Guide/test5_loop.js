const data = [10,20,30,40,50];
//normal loop
for(let index = 0;index<data.length;index++){
    console.log(`index ${index} = ${data[index]}`);
}
//callback loop
data.forEach(element => {
    console.log(`element = ${element}`);
});

for (const element of data) {
    if(element>=30){
        break;
    }
    console.log(`index of data = ${element}`);
}