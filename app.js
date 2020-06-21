// **************************************** < Chapter 21 - 25 > **********************************************

// Assignment 21-25.1

// var firstName = prompt("Enter Your First Name:");
// var lastName = prompt("Enter your Last Name:");

// alert("Welcome" +" "+firstName + " " + lastName);

// Assign 21-25.2

// var phone = prompt("Write your favourite phone and its model:");

// document.write("My favourite phone is" + " " + phone + "<br>");
// document.write("Length of String:" + " " + phone.length);

// Assign 21-25.3

// var word = "Pakistani";
// Iword = word.indexOf("n");
// document.write("Word:" + " " + word + "<br>");
// document.write("Index of letter n :" + " " + Iword);

// Assign 21-25.4

// var word1 = "Hello World";

// Ilword = word1.lastIndexOf("l");

// document.write("Word:" + " " + word1 + "<br>" + "Last index of l is :" + " " + Ilword);

// Assign 21-25.5

// var word = "Pakistani";

// wordcharacter = word[3];
// document.write("Word:" + " " + word + "<br>" + "Character at index 3 :" + " " + wordcharacter);

// Assign 21-25.6

// var firstName1 = prompt("Enter your first name:");
// var lastName1 = prompt("Enter your last name:");

// fullname1 = firstName1.concat(lastName1);
// document.write(fullname1);

// Assign 21-25.7

// var city1 = "Hyderabad";
// city2 = city1.replace("Hyder", "Islam");
// document.write("City :" + " " + city1 + "<br>" + "" + "after replacement :" + " " + city2);

// Assign 21-25.8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// newMessage = message.replace("and", "&");
// newMessage2 = newMessage.replace("and", "&");
// document.write("Message :" + "<br>" + message + "<br>");
// document.write("Message After replacement :" + "<br>" + newMessage2 + "<br>");

// Assign 21-25.9

// var str = "1234";
// num = Number(str);
// typeStr = typeof(str);
// typeNum = typeof(num);
// document.write("Value :" + " " + str + "<br>" + "Type :" + " " + typeStr + "<br>" + "Value :" + " " + str + "<br>" + "Type :" + " " + typeNum);

// Assign 21-25.10

// var word2 = prompt("Enter a Word :");
// CapWord = word2.toUpperCase();
// document.write("Word :" + " " + word2 + "<br>" + "Word in UpperCase :" + " " + CapWord);

// Assign 21-25.11

// var word3 = prompt("Enter a Word :");

// document.write("Word :" + " " + word3 + "<br>" + "Word in UpperCase :" + " " + TitleLetter);

// Assign 21-25.12

// var number1 = parseInt(prompt("Enter a Number :"));
// strNumber1 = number1.toString();
// document.write("Number :" + " " + number1 + "<br>" + " Type :" + " " + typeof(number1) + "<br>" + "String :" + " " + strNumber1 + "<br>" + " type :" + " " + typeof(strNumber1));

// Assign 21-25.13 


// var userName = prompt("Enter your Username :");

// var enableCharacters1 = String.fromCharCode(33);
// var enableCharacters2 = String.fromCharCode(44);
// var enableCharacters3 = String.fromCharCode(46);
// var enableCharacters4 = String.fromCharCode(64);

// for (let check = 0; check < userName.length; check++) {
//     if (userName[check] == enableCharacters1 || userName[check] == enableCharacters2 || userName[check] == enableCharacters3 || userName[check] == enableCharacters4) {
//         alert("Contains Invalid Characters");
//     }

// }


// Assign 21-25.14 

// var Enter = prompt("Enter an Elemenet")
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// for (let i1 = 0; i1 < A.length; i1++) {
//     if (Enter == A[i1]) {
//         var enter1 = Enter;
//     } else if (Enter != A[i1]) {
//         var enter2 = Enter;
//     }

// }


// if (Enter == enter1) {
//     document.write(enter1 + " " + "is Available at Index Number" + " " + A.indexOf(enter1) + " " + "in our bakery");
// } else if (Enter == enter2) {
//     document.write("We are sorry" + " " + enter2 + " " + "is <b>Not Avaibale</b> in Our Bakery");
// }

// Assign 21-25.15

// var password = prompt("Enter Your Password :");

// requirements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// for (let index1 = 0; index1 < requirements.length; index1++) {
//     if (password[0] == requirements[index1]) {
//         alert("Number Cannot begin with a Number")
//     }

// }

// if (password.length < 6) {
//     alert("It should be 6 characters long atleast")
// }



// Assign 21-25.16 

// var university = "University of Karachi";

// university.split();

// for (let i = 0; i < university.length; i++) {
//     document.write(university[i] + "<br>");

// }



// Assign 21-25.17

// var name = prompt("Enter a word");
// lastindex = name.length;
// document.write("Word :" + " " + name + "<br>" + "Last Character of word :" + " " + name[lastindex - 1]);


// Assign 21-25.18

// var String = "the quick brown fox jumps over the lazy dog";
// res = String.match(/the/g);
// document.write("text :" + " " + String + "<br>" + "There are" + " " + res.length + " " + "occurrence(s) of the word the")



// **************************************** < Chapter 26 - 30 > **********************************************

// Assign 26-30.1

// var value = parseFloat(prompt("Enter a Number in decimal :"));

// roundOff = Math.round(value);
// floorValue = Math.floor(value);
// ceilValue = Math.ceil(value);

// document.write("Value :" + " " + value + "<br>" + "Round Off Value" + " " + roundOff + "<br>" + "Floor Value" + " " + floorValue + "<br>" + "Ceil Value" + " " + ceilValue);


// Assign 26-30.2

// var value = parseFloat(prompt("Enter a Negative Number in decimal :"));

// roundOff = Math.round(value);
// floorValue = Math.floor(value);
// ceilValue = Math.ceil(value);

// document.write("Value :" + " " + value + "<br>" + "Round Off Value" + " " + roundOff + "<br>" + "Floor Value" + " " + floorValue + "<br>" + "Ceil Value" + " " + ceilValue);

// Assign 26-30.3

// var number = parseInt(prompt("Enter a Negative Number :"));
// AbsoluteNumber = number * -1;
// document.write("Negative Number :" + " " + number + "<br>" + "Absolute Number :" + " " + AbsoluteNumber)


// Assign 26-30.4 


// var dice = Math.floor(Math.random() * 6) + 1;

// document.write("Dice value is" + " " + dice);


// Assign 26-30.5

// var coin = Math.floor(Math.random() * 2) + 1;

// if (coin == 2) {
//     document.write(coin + "<br>" + "Coin value is Heads");
// } else if (coin == 1) {
//     document.write(coin + "<br>" + "Coin value is Tails ");
// }

// Assign 26-30.6

// var randomNum = Math.floor(Math.random() * 100) + 1;
// document.write("Random Number Between 1 and 100 is:" + " " + randomNum);


// Assign 26-30.7 

// var w = prompt("Enter your weight in Kilograms");

// var wieght = /[^a-z A-z]/g;
// res = w.match(wieght);
// document.write("your weight is " + res + " kilograms");


// Assign 26-30.8

// var RandomNum = Math.floor(Math.random() * 10) + 1;
// var userNum = parseInt(prompt("Guess a Number between 1 to 10:"))

// if (RandomNum == userNum) {
//     alert("Congratulations Correct !");
// } else if (RandomNum != userNum) {
//     alert("Try Again");
// }



// **************************************** < Chapter 31 - 34 > **********************************************

// Assign 31-34.1

// var d = new Date();
// document.write(d + "<br>");

// Assign 31-34.2

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// document.write("Current Month :" + " " + n);

// Assign 31-34.3

// var d = new Date();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// document.write("Current Day :" + " " + days[d.getDay()]);

// Assign 31-34.4


// var d = new Date();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// if (days[d.getDay()] == "Sunday" || days[d.getDay()] == "Saturday") {
//     document.write("It's Fun Day");
// } else {
//     document.write("Work Day");
// }


// Assign 30-34.5

// var d = new Date();
// var day = d.getDate();
// if (day <= 15) {
//     document.write("First Fifteen Days");
// } else if (day > 15) {

//     document.write("Last Fifteen Days");

// }


// Assign 30-34.6

// var d = new Date();
// var time = d.getTime();
// document.write("Current Date :" + " " + d + "<br>")
// document.write("Elapsed MilliSeconds Since Midnight Jan 1,1970:" + " " + time + "<br>");
// var minutes = 1000 * 60;
// var hours = minutes * 60;
// var t = d.getTime();
// var y = Math.round(t / minutes);
// document.write("Elapsed MilliSeconds Since Midnight Jan 1,1970:" + " " + minutes);

// Assign 30-34.7

// var dt = new Date();
// var h = dt.getHours(),
//     if (h > 12) {
//         alert("It is PM");
//     } else
// if (h < 12) {
//     alert("It is AM");
// }

// Assign 30-34.8

// var d = new Date(2020, 11, 31, 00, 00, 00);
// document.write("Later Date :" + " " + d);
// Assign 30-34.9


// var date1 = new Date();
// var date2 = new Date(2020, 4, 22);
// var Time_Difference = date1.getTime() - date2.getTime();
// var Days_Difference = Time_Difference / (1000 * 3600 * 24);
// document.write(Math.floor(Days_Difference) + " days have passed since 1st Ramdan, 2020");

// // Assign 30-34.10 


// var date1 = new Date(2015, 11, 5, 22, 50, 16);
// var date2 = new Date(2015, 0, 1, 00, 00, 00);
// var Difference_In_Time = date1.getTime() - date2.getTime();
// var Difference_In_Seconds = Difference_In_Time / (1000);
// document.write("On reference date " + date1 + " " + Math.floor(Difference_In_Seconds) + " seconds had passed since beginning of 2015.");


// Assign 30-34.11

// var date1 = new Date();
// var a = date1.getHours()
// var b = date1.getMinutes()
// var c = date1.getSeconds();
// var date2 = new Date(2020, 6, 20, a - 1, b, c);
// document.write("Current Date: " + date1);
// document.write("<br>");
// document.write("1 hour ago, it was " + date2);


// Assign 30-34.12 


// var date1 = new Date();
// var a = date1.getHours()
// var b = date1.getMinutes()
// var c = date1.getSeconds();
// var d = date1.getFullYear();
// var date2 = new Date(2020 - 1, 5, 21, a, b, c);
// document.write("Current Date :" + " " + date1 + "<br>");
// document.write("1 year Ago , it was" + " " + date2 + "<br>");



// Assign 30-34.13

// var age = parseInt(prompt("Enter Your age :"));
// var d = new Date();
// var currentYear = d.getFullYear();
// var BirthYear = currentYear - age;
// document.write("Age :" + " " + age + "<br>" + "Current Year" + " " + currentYear + "<br>" + "birthYear :" + " " + BirthYear);


// Assign 30-34.14

// var name = "Ahmed";
// var d = new Date();
// var month = d.getMonth();
// var lstMonth = ["January", "Febuaray", "March", "April", "May", "June", "july", "August", "September", "October", "November", "Decmeber"]
// var Units = parseInt(380);
// var chargesperunit = parseInt(21);
// var latepaymentSurcharge = parseInt(400);
// netAmount = Units * chargesperunit;
// grossAmount = netAmount + latepaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Costumer's Name :" + " " + name + "<br>");
// document.write("Month :" + " " + lstMonth[month] + "<br>");
// document.write("Number of units :" + " " + Units + "<br>");
// document.write("Net Amount Payable (within due date) :" + " " + netAmount + "<br>");
// document.write("Late Payment SurCharge :" + " " + latepaymentSurcharge + "<br>");
// document.write("Gross Amount Payable (After Due Date) :" + " " + grossAmount);




// **************************************** < Chapter 35 - 38 > **********************************************

// Assign 35-38.1

// function myFunction() {
//     var d = new Date();
//     document.write(d);
// }

// myFunction();

// Assign 35-38.2

// function greet() {
//     var firstName = prompt("Enter your First Name :");
//     var lastName = prompt("Enter your Last Name :");
//     document.write("Welcome" + " " + firstName + " " + lastName + "<br>");
// }

// greet();


// Assign 35-38.3

// function addNum() {
//     var a = parseInt(prompt("Enter First Number :"));
//     var b = parseInt(prompt("Enter Second Number :"));
//     add = a + b;
//     document.write("First Number :" + " " + a + "<br>" + "Seccond Number :" + " " + b + "<br>" + "Result :" + " " + add);
// }

// addNum();


// Assign 35-38.4

// function calc() {
//     var num1 = parseInt(prompt("Enter First Number :"));
//     var operator = prompt("Enter Operator :");
//     var num2 = parseInt(prompt("Enter Second Number :"));
//     if (operator == "+") {
//         result = num1 + num2;
//         alert("Result :" + " " + result);
//     } else if (operator == "-") {
//         result = num1 - num2;
//         alert("Result :" + " " + result);
//     } else if (operator == "*") {
//         result = num1 * num2;
//         alert("Result :" + " " + result);
//     } else if (operator == "/") {
//         result = num1 / num2;
//         alert("Result :" + " " + result);
//     } else {
//         alert("Enter Correct Operator !");
//     }


// }

// calc();



// Assign 35-38.5

// function sqaure(a) {
//     sq = a ** 2;
//     document.write("Square of Number is" + " " + sq);
// }

// sqaure(2);


// Assign 35-38.6

// function factorial(n) {
//     let answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// let n = 4;
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);


// Assign 35-38.7 

// function Counting(a, b) {
//     for (i = a; i <= b; i++) {
//         document.write(i + "<br>");
//     }
// }

// Counting(3, 9);


// Assign 35-38.8

// function calculateHypotenuse() {
//     var base = parseInt(prompt("Enter Base :"));
//     var perp = parseInt(prompt("Enter Perpendicular :"));

//     function calculateSquare() {
//         var baseSq = base ** 2;
//         var perpSq = perp ** 2;

//     }
//     calculateSquare();

//     var hyp = (baseSq + perpSq) ** 1 / 2;
//     document.write("Base :" + " " + base + "<br>");
//     document.write("Perpendicular :" + " " + perp + "<br>");
//     document.write("Hypotenuse :" + " " + hyp);


// }


// calculateHypotenuse();


// Assign 35-38.9

// function Area(width, height) {
//     A = width * height;
//     document.write("Width :" + " " + width + "<br>");
//     document.write("Height :" + " " + height + "<br>");
//     document.write("Area Of Triangle" + " " + A + "<br>");
// }

// Area(3, 4);

// Assign 35-38.10


// function palindrome(word) {
//     var word = "civic";
//     var check = "";
//     for (i = word.length - 1; i >= 0; i--) {
//         check += word[i]
//     }

//     if (check === word) {
//         document.write(word + " is a Palindrome word");
//     } else if (check !== word) {
//         document.write(word + " is not a Palindrome word");
//     }
// }
// palindrome("civic");

// Assign 35-38.11

// function upper(str) {
//     var upstr = str.toUpperCase();
//     document.write(upstr);
// }

// upper("ahmed");


// Assign 35-38.12

// function find_longest_word(str) {
//     var array1 = str.match(/\w[a-z]{0,}/gi);
//     var result = array1[0];

//     for (var x = 1; x < array1.length; x++) {
//         if (result.length < array1[x].length) {
//             result = array1[x];
//         }
//     }
//     return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


// Assign 35-38.13


// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var position = 0; position < str.length; position++) {
//         if (str.charAt(position) == letter) {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }

// alert(char_count('JSResourceS,.com', 'o'));


// Assign 35-38.14

// function calcCircumference(radius) {
//     circumference = radius * 2 * 3.14;
//     document.write("The Circumference is " + " " + circumference + "<br>");
// }
// calcCircumference(2);

// function calcArea(radius) {
//     area = (radius ** 2) * 3.142;
//     document.write("The Area is " + +area);
// }

// calcArea(2);