//Assignment3 Part 1
//QUESTION 1
/*1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.*/
//var favMovie = ["Ronin", "Terminator", "Fast&Furious", "Matrix", "Transporter"];
//console.log(favMovie[1]);
//QUESTION 2
/*2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.*/
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Transporter";
//console.log(movies[0]);
//QUESTION 3
/*3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.*/
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Transporter";
//movies[movies.length] = "Italian Job";
//console.log(movies.length);
//QUESTION 4
/*4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.*/
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Transporter";
//delete movies[0];
//console.log(movies);
//QUESTION 5
/*5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.*/
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Transporter";
//movies[5] = "Italian Job";
//movies[6] = "Taken";
//for(var m = 0; m < movies.length; m++){
//    console.log(movies[m]);}
//QUESTION 6
/*6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.*/
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Transporter";
//movies[5] = "Italian Job";
//movies[6] = "Taken";
//for(var index in movies){
//    console.log(movies[index]);}
//QUESTION 7
/*7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.*/
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Transporter";
//movies[5] = "Italian Job";
//movies[6] = "Taken";
//movies.sort();
//for(var index in movies){
//    console.log(movies[index]);}
//QUESTION 8
/*8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):*/
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Transporter";
//movies[5] = "Italian Job";
//movies[6] = "Taken";
//movies.sort();
//var leastFavMovies = [];
//leastFavMovies[0] = "Alone in the Dark";
//leastFavMovies[1] = "All Blair Witch";
//leastFavMovies[2] = "ALL TMNT";
//leastFavMovies.sort();
//console.log("Movies I like: \n\n\n");
//for(var index in movies){
//    console.log(movies[index]);}
//console.log("\nMovies I regret watching: \n\n\n");
//for(var index in leastFavMovies){
//    console.log(leastFavMovies[index]);}
//QUESTION 9
/*9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.*/
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Transporter";
//movies[5] = "Italian Job";
//movies[6] = "Taken";
//var leastFavMovies = [];
//leastFavMovies[0] = "Alone in the Dark";
//leastFavMovies[1] = "All Blair Witch";
//leastFavMovies[2] = "All TMNT";
//movies = movies.concat(leastFavMovies);
//console.log(movies.reverse(movies.sort()));
//QUESTION 10
/*10.	Return just the last item in the array and display it within the console window.*/
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Transporter";
//movies[5] = "Italian Job";
//movies[6] = "Taken";
//var leastFavMovies = [];
//leastFavMovies[0] = "Alone in the Dark";
//leastFavMovies[1] = "All Blair Witch";
//leastFavMovies[2] = "All TMNT";
//movies = (movies.sort(movies.concat(leastFavMovies)));
//onlyMovie = movies.pop();
//console.log(onlyMovie);
//QUESTION 11
/*11.	Remove the previous method and this time return just the first item in the array and display it within the console window.*/
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Transporter";
//movies[5] = "Italian Job";
//movies[6] = "Taken";
//var leastFavMovies = [];
//leastFavMovies[0] = "Alone in the Dark";
//leastFavMovies[1] = "All Blair Witch";
//leastFavMovies[2] = "All TMNT";
//onlyMovie = (movies.sort(movies.concat(leastFavMovies)));
//onlyMovie = movies.shift();
//console.log(onlyMovie);
//QUESTION 12
/*12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. */
//var movies = [];
//movies[0] = "Ronin";
//movies[1] = "Terminator";
//movies[2] = "Fast&Furious";
//movies[3] = "Matrix";
//movies[4] = "Alone in the Dark";
//movies[5] = "All Blair Witch";
//movies[6] = "All TMNT";
//console.log(movies.indexOf("Alone in the Dark"));
//console.log(movies.indexOf("All Blair Witch"));
//console.log(movies.indexOf("All TMNT"));
//movies.splice(4, 6, "Transporter", "Italian Job", "Taken");
//console.log(movies);
//QUESTION 13
/*13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. */
//var employee1 = [];
//employee1["id"] = 7777;
//employee1["name"] = "Zak Ruvalcaba";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//var employee2 = [];
//employee2["id"] = 8888;
//employee2["name"] = "Khanh Tran";
//employee2["title"] = "No Idea";
//employee2["department"] = "Whatsoever";
//employee2["isCurrent"] = false;
//var employees = [employee1, employee2];
//console.log(employees[1]["name"]);
//QUESTION 14
/*14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.*/
//var employee1 = [];
//employee1["id"] = 7777;
//employee1["name"] = "Zak Ruvalcaba";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//var employee2 = [];
//employee2["id"] = 8888;
//employee2["name"] = "Khanh Tran";
//employee2["title"] = "No Idea";
//employee2["department"] = "Whatsoever";
//employee2["isCurrent"] = true;
//var employees = [employee1, employee2];
//for (var e = 0; e < employees.length; e++) {
//    console.log(employees[e]["name"]);
//}
//QUESTION 15
/*15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.*/
//var employee1 = [];
//employee1["id"] = 7777;
//employee1["name"] = "Zak Ruvalcaba";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//var employee2 = [];
//employee2["id"] = 8888;
//employee2["name"] = "Khanh Tran";
//employee2["title"] = "No Idea";
//employee2["department"] = "Whatsoever";
//employee2["isCurrent"] = true;
//var employee3 = [];
//employee3["id"] = 9999;
//employee3["name"] = "Steve Jobs";
//employee3["title"] = "Inventor";
//employee3["department"] = "R&D";
//employee3["isCurrent"] = false;
//var employees = [employee1, employee2, employee3];
//for (var e = 0; e < employees.length; e++) {
//    if (employees[e]["isCurrent"] == true) {
//        console.log(employees[e]["name"]);
//}}
//QUESTION 16
/*16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.*/
//var movies = [["Ronin", 1],["Taken", 2],["Transporter", 3],["Matrix", 4],["Fast&Furious", 5]];
//var moviesName = [];
//for (var item in movies) {
//    moviesName += " " + movies[item].filter(function(item) {
//        return typeof item == "string";
//});}
//console.log(moviesName);
//Practice with Functions (5 points)
/*1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.*/
//var displayMessage = function(parameter) {
//    console.log(parameter);
//}
//displayMessage("pah-rah-mee-tor");
/*2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.*/
//function calculate(param1, param2) {
//    return param1 % param2;
//}
//console.log(calculate(2187385686, 4236677842));
/*3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:*/
//var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
//var showEmployee = function(parameter) {
//    for (var e in employees) {
//        console.log(employees[e]);
//    }
//}
//console.log("Employees: \n\n");
//showEmployee(employees);
/*The Rock, Paper, Scissors Game (10 points)
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
•	Rock destroys scissors.
•	Scissors cut paper.
•	Paper covers rock.*/
//var humanChoice = window.prompt("Would you like rock, paper, or scissor?").toLowerCase();
//    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
//        window.alert("You can only select rock, paper, or scissor.");
//        }
//			
//        var computerChoice = Math.random();
//			
//			if (computerChoice <= 0.333) {
//				computerChoice = "rock";
//			} else if (computerChoice <= 0.666) {
//				computerChoice = "paper";
//			} else {
//				computerChoice = "scissors";
//			}
//			
//			if (humanChoice == computerChoice) {
//				window.alert("The result is a tie");
//			} else if (humanChoice == "rock") {
//				if (computerChoice == "scissors") {
//					window.alert("The computer got scissors, you win!");
//				} else {
//					window.alert("The computer got paper, you lose!");   
//				}
//			} else if (humanChoice == "paper") {
//				if (computerChoice == "rock") {
//					window.alert("The computer got rock, you win!");
//				} else {
//					window.alert("The computer got scissors, you lose!");   
//				}
//			} else if (humanChoice == "scissors") {
//				if (computerChoice == "paper") {
//					window.alert("The computer got paper, you win!");
//				} else {
//					window.alert("The computer got rock, you lose!");   
//				} 
//			}
/*The Basic Calculator (10 points)
In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:*/
//		function userInput() {
//				var value1 = window.prompt("Enter the first number.");
//				var value2 = window.prompt("Enter the second number.");
//				var equation = window.prompt("Which operation would you like to perform (add, subtract, multiply, or divide)?");
//				window.alert(calculate(Number(value1), Number(value2), equation));
//			}
//		function calculate(value1, value2, equation) {
//				switch (equation.toLowerCase()) {
//					case "add":
//						return value1 + value2;
//						break;
//					case "subtract":
//						return value1 - value2;
//						break;					
//					case "multiply":
//						return value1 * value2;
//						break;					
//					case "divide":
//						return value1 / value2;
//						break;					
//					default:
//						window.alert("You did not select add, subtract, multiply, or divide.  Try again!");
//						userInput();
//				}
//			}
//userInput();
//calculate();
/*Death by JavaScript (4 points each for 20 points total)*/
//QUESTION 1
/*1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
Sample Data and Output
Example string: 'webmaster' 
Expected Output: 'abeemrstw'*/
//function alphabetOrder(str)
//{
// return str.split("").sort().join("");
//} 
//window.alert(alphabetOrder("webmaster"));
//QUESTION 2
/*2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.
Sample Data and Output
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox'*/
//var longString = window.prompt("Please type in a long string all in lowercase.");
//function upperCase(str)  
//{  
//  var array1 = str.split(" ");  
//  var newarray1 = [];  
//  for(var u = 0; u < array1.length; u++){  
//newarray1.push(array1[u].charAt(0).toUpperCase()+array1[u].slice(1));  
//  }  
//  return newarray1.join(" ");  
//}  
//window.alert(upperCase(longString));
//QUESTION 3
/*3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.*/
//function countVowel(str1)  
//{  
//  var vowel = 'aeiouyAEIOUY';  
//  var vowelcount = 0;  
//  for(var v = 0; v < str1.length ; v++)  
//  {  
//    if (vowel.indexOf(str1[v]) !== -1)  
//    {  
//      vowelcount += 1;  
//    }  
//  }  
//  return vowelcount;  
//}
//var sentence = window.prompt("Please type a long sentence and I will calculate how many vowel is in the sentence.");
//window.alert(countVowel(sentence));  
//QUESTION 4
/*4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.
Sample Data and Output
Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA*/
//function randomizedStr(len)
//{
//var lengthOf = "";
//var listOfChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//for(var i=0; i < len; i++ )
//{  
//lengthOf += listOfChars.charAt(Math.floor(Math.random() * listOfChars.length));
//}
//return lengthOf;
//}
//var lengthInput = parseInt(window.prompt("Please enter the length of the randomized string: "));
//window.alert(randomizedStr(lengthInput));
//QUESTION 5
/*5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
Sample Data and Output
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"*/
//function longestCountryName(countryName)
//  {
//  return countryName.reduce(function(lname, country) 
//  {
//      if(lname.length > country.length){
//          return lname;
//      }else{
//          return country;
//      }
//  }, 
//"");
//}
//window.alert(longestCountryName(["The Former Yugoslav Republic of Macedonia", "Democratic Republic of the Congo ", "United States of America", "Saint Vincent and the Grenadines", "Federated States of Micronesi", ]));
