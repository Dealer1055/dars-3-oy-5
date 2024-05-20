let ism = prompt("Ismingizni kiriting : ") 
let yosh = prompt("Yoshingizni ni kiriting : ")
let shahar = prompt("Yashaydigon shaharni kiriting : ")

let you = {
    name: ism,
    age: yosh,
    city: shahar,
};

for (let key in you){
    console.log(you[key])
}