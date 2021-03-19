const fruitArray=[
    {name:'Grapes',color:'green',price:100},
    {name:'apple',color:'red',price:150},
    {name:'PineApple',color:'Yellow',price:125},
    {name:'orange',color:'orange',price:60},
];
const convertToobj=(fruitArray1,keyfield)=>
fruitArray1.reduce((obj,item) => {
    obj[item[keyfield]]=item;
    return obj;
}, {});
const fruitobj=convertToobj(fruitArray,'name');
console.log(fruitobj);
console.log(fruitobj.PineApple);
console.log(fruitobj.Grapes);

