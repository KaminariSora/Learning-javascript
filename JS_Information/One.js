let user = {
    name: "kaminariSora",
    age : 19,
    study : "university",
    displayName:function(){
        return "name ="+this.name;
    },
    displayAge:function(){
        return "age - 10 = ",this.age - 10;
    }
};
console.log(user.displayName());
console.log(user.displayAge());