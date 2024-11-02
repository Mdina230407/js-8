let users = {}
for(let i=0; i<10; i++){
    let name = prompt('введите имя')
    let age = prompt('введите возраст')
    
     users [i] ={
        name:name,
        age:age
    }
}
for (let key in users) {
    console.log(`Пользователь - ${key}`);
    console.log(`Имя - ${users[key].name}`);
    console.log(`Возраст - ${users[key].age}`);
}
console.log(users);