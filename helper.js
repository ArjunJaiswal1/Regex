//const {nameRegex} = require('./Pattern');
var regEx = require('./Pattern').nameRegex;
var reg1 = require('./Pattern').passwordRegex; 
var reg2 = require('./Pattern').emailRegex;
var reg3 = require('./Pattern').PhonenumberRegex;


let nameRegex = regEx.test("Arjun")
console.log("nameRegex===>", nameRegex);

let passwordRegex = reg1.test("arju@12")
console.log("passwordRegex===>", passwordRegex);

let emailRegex = reg2.test("arju8065@gmail.com")
console.log("emailRegex===>", emailRegex);

let PhonenumberRegex =  reg3.test("9821848065")
console.log("Phonenumber===>", PhonenumberRegex);