//***********************Task 1***********************
  
 // Alert when the page loads

 alert("Welcome to the webpage!");



 //***************************Task 2********************


  // Declare variables for user's name and greeting message
  let userName = "John";
  let greetingMessage = "Hello, " + userName + "! Welcome to the website.";
  
  // Display the greeting message in an alert
  alert(greetingMessage);


  //*********************Task 3**********************


  // Declare two number variables

  let num1 = 10;
  let num2 = 5;
  
  // Add the numbers and show the result
  
  let sum = num1 + num2;
  alert("The sum of " + num1 + " and " + num2 + " is " + sum);



  //******************Task 4******************** 

   // Legal variable names
   let firstName = "John";
   let $age = 25;
   let _location = "USA";
   
   // Display legal variable names
   alert("First Name: " + firstName);
   alert("Age: " + $age);
   alert("Location: " + _location);
   
   // Illegal variable names (commented out with explanations)
   // let 123name = "Invalid";  // Variable name cannot start with a number
   // let user-name = "Invalid";  // Hyphen is not allowed in variable names
   // let let = "Invalid";  // Cannot use reserved keywords as variable names


//***************************Task 5 **********************/

    // Prompt the user for two numbers
    let numb1 = parseFloat(prompt("Enter the first number:"));
    let numb2 = parseFloat(prompt("Enter the second number:"));

    // Perform operations and show the results in alerts
    let addition = numb1 + numb2;
    alert("The sum is: " + addition);

    let subtraction = numb1 - numb2;
    alert("The difference is: " + subtraction);

    let multiplication = numb1 * numb2;
    alert("The product is: " + multiplication);
    if (numb2 !== 0) {
        let division = numb1 / numb2;
        alert("The quotient is: " + division);
    } else {
        alert("Division by zero is not allowed.");
    }

    //****************** Task 6 ******************/
    // Modulus operator (remainder of division)
    let numb11 = 17;
    let numb22 = 5;
    let remainder = numb11 % numb22;
    alert("The remainder of " + numb11 + " divided by " + numb22 + " is: " + remainder);

    // Increment operator
    let x = 10;
    x++;
    alert("After incrementing, x is: " + x);

    // Decrement operator
    let y = 10;
    y--;
    alert("After decrementing, y is: " + y);



//******************** Task 7  ************************* */



     // Complex expression using parentheses to eliminate ambiguity
     let result = (5 + 2) * 3 - 4 / 2;
     alert("The result of the expression (5 + 2) * 3 - 4 / 2 is: " + result);
