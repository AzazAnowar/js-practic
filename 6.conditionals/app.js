// conditionals

// if, else, switch

const x = '10';
 if(x == 10){
    console.log(`x is equal to ${x}`);
 }else{
    console.log("condition did not match");
 }

//  "==" is use to compair but don't compair the data type
// "===" compair the data and also the data types

const xx = '10';
 if(xx === 10){
    console.log(`x is equal to ${xx}`);
 }else{
    console.log("condition did not match");
 }

//  ternary operator

const num = 10;
const color = num >=10 ? 'red' : 'blue';
// const color = "yellow";
// this ? mark represent then and : represent else
// if num is grater or equal to 10 then red else blue
console.log(color);

// switch case 

switch(color){
    case 'red' :
        console.log('color is red');
        break;
    case 'blue' :
        console.log("color ir blue");
        break;
    default:
        console.log("color dose not match");
}