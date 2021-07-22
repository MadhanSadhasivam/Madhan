//Task 1 
//1.declare four variables
var a;
var b;
var c;
var d;
console.log(a,b,c,d);
//2.
var myvar= 1;
console.log(myvar);
//3.
var firstname="";
var lastname="";
var maritalstatus="";
var age="";
var country="";
//4.
var firstname,lastname,maritalstatus,age,country;
//5.
var a=10;
var b="string";
var c="true";
var d=" ";
var e;
//6.
var number = parseInt("10");
var number1 = +"10";
var number2 = Number("10");
//7.
var a = "string" //true
var b = 20; //true
var c = "true"//true
var d = false //false
var e = ' '//false
var f ; //false

//Task 2
//1.square of a number
var a = 2;
console.log(a*a);
//2.
var num1=10;
var num2=20;
var temp;
temp=num1;
num1=num2;
num2=temp;
console.log(num1,num2);
//3.
var a=10;
var b=10;
var c=10;
console.log(a + b + c);
//4.
var a = 10;
var b = ((a * 1.8) + 32.0);
console.log(b); 
//5.
var meter = 100000;
var miles = eval('meter/'+(1/2*Math.PI*-1e6*~Math.E-!0-273326.98038468976+'').split('').reverse().join('')+'e'+~2)
console.log(miles); 
//6.
var pound = 100;
var kg = pound/2.2046
console.log(kg); 
//7.
var runs = 10000;
var out = 75;
var average = runs/out;
console.log(average); 
//8.
var match1=50;
var match2=60;
var match3=10;
var match4=110;
var match5=75;
var total = (match1+match2+match3+match4+match5);
console.log(total/5); 
//9.
var e = Math.pow(2, 3);
console.log(e); 
//10.
var a =10;
var b =10;
var c =10;
var total=(a*b*c);
console.log(total/100); 
//11.
var a = 30;
var area=(Math.sqrt(3)/4) * (a*a);
console.log(area); 
//12.
var h = 10;
var b = 10;
var iso=(1/2*h*b);
console.log(iso); 
//13.
var r = 10;
var volume = (4/3*Math.PI*r*r*r);
console.log(volume); 
//14.
var base = 10;
var height =10;
var volume = base * height;
console.log(volume); 
//15.
var base =10;
var height =10;
var area = (1/2*base*height);
console.log(area); 
//16.
var actual =100;
var sold =80;
var discount=actual-sold;
console.log(discount); 
//17.
var a = 10;
var cir = 2 * Math.PI *a;
var dia = 2*a;
var area = Math.PI*a*a;
console.log(cir);
console.log(dia);
console.log(area); 
//18.
var a = 10;
var b = 10;
console.log(a+a);
console.log(a-a);
console.log(a*a);
console.log(a/a);
console.log(a%a); 
//19.
let a = 5; 
let b = "";
for (let i = 1; i <= a; i++) { 
  for (let j = 1; j < a; j++) {
    b += "*";
  }
  b += "\n";
}
console.log(b); 
//20.
var daily = 100;
var unitrate = 10;
var oneunit = 1000;
var monthwatt = 30 * daily;
var bill = unitrate * monthwatt/oneunit;
console.log(bill); 
//21.
var a = 80;
var b = 82;
var c = 85;
var d = 90;
var e = 75;
var sum = (a+b+c+d+e);
console.log(sum/5);
