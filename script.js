let display1= document.getElementById("display1");
let display2= document.getElementById("display2");
let actual="";
let resultado= ""; 
let igual = '0';

function addToDisplay(value){
    if(igual=='1'){
        igual='0';
        actual= resultado;
        display2.value = "";
    }
    actual += value;
    display1.value = actual;
}

function calcular(){
    igual = '1';
    try{
        resultado = eval(actual);
        display2.value = resultado;
    } catch(error){
        display2.value = "ERROR"
    }
}

function AC(){
    actual= "";
    resultado= "";
    display1.value = actual;
    display2.value = resultado;
}

function menos(){
    actual = actual.slice(0, -1);
    display1.value = actual;
}