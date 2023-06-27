getDateCustomer=(FirstName,LastName)=>{
    if(!FirstName){
        FirstName = 'Nonthacha';
    }
    if(!LastName){
        LastName = 'Huanchitt';
    }
    const address = `FirstName : ${FirstName}
    LastName : ${LastName}`
    return address;
}

console.log("Parameter = "+getDateCustomer("Sora","Kaminari"));
console.log("Default = "+getDateCustomer());