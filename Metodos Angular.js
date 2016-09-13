Metodos de Angular

angular.isString(object);
angular.lowercase(object);
angular.uppercase(object);

angular.isNumber(7);


// ----------------- Objetos ---------------------------------------------//

var myData = new Object();
myData.name = "Adam";
myData.weather = "sunny"


var myData = {
	name : "Adam",
	weather : "sunny"
};

var myData = {
	name : "Adam",
	weather : "sunny"

	printMessages: function(){
		console.log("Hello " ´+ this.name);
		console.log("Today is " + this.weather)
	}
};


// ------------- Extención de Objetos --------------------------------------//

var myData = {
	name : "Adam",
	weather : "sunny"

	printMessages: function(){
		console.log("Hello " ´+ this.name);
		console.log("Today is " + this.weather)
	}
};

var myExtendeObject = {
	city : "London";
};

angular.extend(myExtendeObject, myData);

console.log(myExtendeObject.name);
console.log(myExtendeObject.city);

// ------------- Detección de objetos -------------------------------------//

angular.isObject(myObject);

// ------------- Modificar valores de propiedades en un objeto -----------//

var myData = {
	name : "Adam",
	weather : "sunny"
};

myData.name = "Joe";
myData["weather"] = "raining"

console.log("Hello " + myData.name + ".");
console.log("It is " + myData["weather"])


//-------------- Datos enumerados en un objeto ----------------------------//

var myData = {
	name : "Adam",
	weather : "sunny"

	printMessages: function(){
		console.log("Hello " ´+ this.name);
		console.log("Today is " + this.weather)
	}
};

for (var prop in myData){
	console.log("Name: " + prop + " Value: " + myData[prop]);
}

console.log ("---");

angular.forEach(myData, function(value, key)){
	console.log("Name : " + key + "Value " + value);
}


//--------------- Borrado de propiedades del objeto -----------------------//

var myData = {
	name : "Adam",
	weather : "sunny"
};

delete myData.name;
delete myData["weather"];
delete myData.SayHello;

//-------- Determinando si existe una propiedad en un objeto --------------//

var myData = {
	name : "Adam",
	weather : "sunny"
};


var hasName = "name" in myData;
var hasDate = "date" in myData;

//-------------------- Descripción de operadores --------------------------//

++, -- Pre- or post-increment and decrement

+, -, *, /, % Addition, subtraction, multiplication, division, remainder

<, <=, >, >= Less than, less than or equal to, more than, more than or equal to

==, != Equality and inequality tests

===, !== Identity and nonidentity tests

&&, || Logical AND and OR (|| is used to coalesce null values)

= Assignment

+ String concatenation

?: Three operand conditional statement



var firstVal = 5;
var secondVal = "5";

if (firstVal == secondVal){
	console.log("They are the same");
}else{
	console.log("They are not the same");
}

= They are the same


if (firstVal === secondVal){
	console.log("They are the same");
}else{
	console.log("They are NOT the same");
}

= They are NOT the same

--------------------------------------------------------------------------

var myData1 = {
	name: "Adam",
	weather: "sunny",
};

var myData2 = {
	name: "Adam",
	weather: "sunny",
};

var myData3 = myData2;

var test1 = myData1 == myData2;
var test2 = myData2 == myData3;
var test3 = myData1 === myData2;
var test4 = myData2 === myData3;

= Test 1: false Test 2: true
  Test 3: false Test 4: true

// --------------- Conversión explicita -------------------------//

var myData1 = 5 + 5;
var myData2 = 5 + "5";

= 10 
  55

// --------------- Conversión de cadenas ----------------------//

var myData1 = (5).toString() + String(5);

Método							   Descripción																	Retorno
toString()                         Represents a number in base 10 												string
toString(2)toString(8)toString(16) Represent a number in binary, octal, or hexadecimal notation string
toFixed(n) 						   Represents a real number with the n digits after the decimal point 			string
toExponential(n) 				   Represents a number using exponential notation with one digit before the     string
								   decimal point and n digits after
toPrecision(n) 					   Represents a number with n significant digits, using exponential notation    string
								   if required



//-------- Conversion Cadenas a Números ----------------------//

var firstVal = 5;
var secondVal = "5";

var result = Number(firstVal) + Number(secondVal);

Método				Descripción
Number(str) 		Parses the specified string to create an integer or real value
parseInt(str) 		Parses the specified string to create an integer value
parseFloat(str) 	Parses the specified string to create an integer or real value


//--------------------- Arreglos  ---------------------------//

var myArray = new Array();

myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

var myArray = [100, "Adam", true];

//------------------- Detectar Arreglos ---------------------//

angular.isArray([100,"Adam",true]);
angular.isArray("Adam");
angular.isArray(23);

//------------ Agregar y modificar contenido ---------------//

console.log(myArray[0]);

myArray[0] = "Tuesday"

//--------- Enuerar contenido de arreglo -------------------//


for (var i = 0; i < myArray.length; i++) {
	console.log("Index " + i + ": " + myArray[i]);
}
console.log("---");

angular.forEach(myArray, function (value, key) {
	console.log(key + ": " + value);
});

Index 0: 100
Index 1: Adam
Index 2: true
---
0: 100
1: Adam
2: true

Method Description Returns
concat(otherArray) Concatenates the contents of the array with the array specified by the                    Array
argument. Multiple arrays can be specified.

join(separator) Joins all of the elements in the array to form a string. The argument specifies				 Array
the character used to delimit the items.

pop() Treats an array like a stack and removes and returns the last item in the array.  					 Array

push(item) Treats an array like a stack and appends the specified item to the array.                         void

reverse() Reverses the order of the items in the array.                                                      Array

shift() Like pop, but operates on the first element in the array. 											 object

slice(start,end) Returns a section of the array.                                                             Array

sort() Sorts the items in the array. 																		 Array

splice(index, count) Removes count items from the array, starting at the specified index. 					 Array

unshift(item) Like push, but inserts the new element at the start of the array.                              void



//----------------- Comparación indefinida y valores nulos ---------------------------//


console.log("Prop " + myData.doesnexist)
Prop : undefined

var myData = {
	name: "Adam",
};

console.log("Var: " + myData.weather);
console.log("Prop: " + ("weather" in myData));

Var: undefined
Prop: false

myData.weather = "sunny";
console.log("Var: " + myData.weather);
console.log("Prop: " + ("weather" in myData));

Var: sunny
Prop: true

myData.weather = null;
console.log("Var: " + myData.weather);
console.log("Prop: " + ("weather" in myData));

Var: null
Prop: true

//---------------- Validado nulos o indefinidos ---------------------------//


var myData = {
	name: "Adam",
	city: null
};

if (!myData.name) {
	console.log("name IS null or undefined");
} else {
	console.log("name is NOT null or undefined");
}

if (!myData.city) {
	console.log("city IS null or undefined");
} else {
	console.log("city is NOT null or undefined");
}

name is NOT null or undefined
city IS null or undefined




var myData = {
	name: "Adam",
	city: null
};

console.log("name: " + angular.isDefined(myData.name));
console.log("city: " + angular.isDefined(myData.city));
console.log("country: " + angular.isDefined(myData.country));

name: true
city: true
country: false