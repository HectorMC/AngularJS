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


