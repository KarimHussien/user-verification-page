/*
*Author: Karim Hussien
*Due Date: June 18, 2023
*Refactored on: March, 25, 2024
*Description: Validate the input for several different widgets by using a combination of HTML and JavaScript Code.
*/

function testLength(value, length)
	{
		if(value.length === length)
			{
				return true;
			}
			
		else
			{
				return false;
			}
	
	}
//Tests if the length of the value is equal to the desired length passed in.
//If so, return true, else return false.
	
function testNumber(value)
	{
		var numberValue = true;

		if(isNaN(value))
			{
				numberValue = false;
			}
			
		return numberValue;
	}
//Look at the value of the parameter and check to see if it is a number.
//If the value is not a number, found using isNan, return false, otherwise return true.
	
function validateControl(control, name, length)
	{
		var lengthBool = false;
		var numberBool = false;
		var isZipBool = false;
		
		if(name == "zip")
			{
				isZipBool = true;
			}
		//Used to check if error messages should be about Zip Code or CVV2/CVC
		
		lengthBool = testLength(control.value, length);
		
		if(lengthBool === false)
			{
				if(isZipBool === true)
					{
						window.alert("Zip code is not the correct length.");
					}
					
				else
					{
						window.alert("CVV2/CVC is not the correct length.");
					}
					
				return false;
			}
		//If length was incorrect, inform the user.
			
		else
			{
				numberBool = testNumber(control.value);
				
					if(numberBool === false)
						{
							if(isZipBool === true)
								{
									window.alert("Zip code must contain all numbers.");
								}
								
							else
								{
									window.alert("CVV2/CVC must contain all numbers.");
								}
								
							return false;	
						}
						
					else
						{
							return true;
						}
			}
		//If a non-digit character was detected, inform the user.
		
	}
//Checks to see if Zip Code or CVV2/CVC is correct, by checking for the correct length and if there are any non-digit characters.
//If the Zip Code or CVV2/CVC is invalid for any reason, inform the user which value is wrong and why.
	
function validateCreditCard(value)
	{
		var numberBool = false;
		var validNumberBool = false;
		var lengthBool = false;
		var cardNumber = value.value;
		var lengthValue = 0;
		
		cardNumber = cardNumber.replace(/(\s)*/g,"");
		//Uses a regular expression to remove any and every instance of a space in the card number.
		
		numberBool = testNumber(cardNumber);
		
		if(numberBool === false)
			{
				window.alert("Credit must contain only numbers.");
				return false;
			}
		//If a non-digit character was detected, inform the user.
		
		else
			{	
				if((cardNumber.charAt(0) == 3) || (cardNumber.charAt(0) == 4) || (cardNumber.charAt(0) == 5) || (cardNumber.charAt(0) == 6))
					{
						
						if(cardNumber.charAt(0) == 3)
							{
								lengthValue = 15;
							}
							
						else
							{
								lengthValue = 16;
							}
							
						validNumberBool = true;
					}
				
				else
					{
						window.alert("The first digit of the credit card was invalid.");
						validNumberBool = false;
						return false;
					}
			}
		//Checks to see if the first digit of the credit card is valid.
		//If so, assign the appropriate length value for further testing.
		//If not, inform the user.
			
		if((numberBool === true) && (validNumberBool === true))
			{
				lengthBool = testLength(cardNumber, lengthValue);
				
				if(lengthBool === false)
					{
						window.alert("Credit card number was not the correct length, should be: " + lengthValue + " digits long.");
						return false;
					}
					
				else
					{
						return true;
					}
			}
		//Tests the length of the credit card number based on its first digit.
		//If correct, return true, else return false and inform the user.
	
	}
//Checks to see if the credit card number is valid or not.
//If invalid for any reason, wrong length, non-digit characters, invalid 1st digit, inform the user as to the incorrect value.
	
function validateDate(value)
	{
		var currDate = new Date();
		var currMonth = currDate.getMonth() + 1;
		var currYear = currDate.getFullYear();

		var userDate = value.value.split("-");
		//userDate[0] is year, userDate[1] is month, used for comparisons.
		
		if(userDate[0] > currYear)
			{
				return true;
			}
			
		else if(userDate[0] < currYear)
			{
				window.alert("The year has expired.");
				return false;
			}
		//Checks the year first, since depending on the year, the month might be irrelevant.
		//If user entered year is greater than current year, return true, regardless of month.
		//If user entered year is less than current year, return false, regardless of month. Then inform the user.
		//Only if user entered year equals current year do we check the month.
			
		else
			{
				if(userDate[1] <= currMonth)
					{
						window.alert("The month has expired.");
						return false;
					}
				
				else
					{
						return true;
					}
			}
		//This test is run if useryear == curryear.
		//Checks to see if the user entered month has expired or not.
		//If user entered month is less than or equal to current month, return false and inform the user, otherwise return true.
	
	}
//Checks to see if the user entered date is expired or not.
//If the entered date is incorrect, inform the user why.
	
function validateEmail(value)
	{
		var regex = /(.)+@([a-z]|[A-Z])+\.([a-z]|[A-Z])+/;
		//Regular expression that accepts (anything)@(any word).(any word).
		
		if(regex.test(value.value))
			{
				return true;
			}
			
		else
			{
				window.alert("Email does not conform to proper formatting: username@domain.com");
				return false;
			}
		//Checks to see if entered email conforms to proper formatting laid out by the regular expression.
		//If so return true, else return false, along with an example email for the user.
	
	}
//Checks to see if the entered email is correct or not.
//If not, inform the user and provide them with an example email.
	
function validateState(value)
	{
		
		if(value.value == "select_state")
			{
				window.alert("Please pick a state.");
				return false;
			}
		
		else
			{
				return true;
			}
		//Checks to see if the default value from the drop-down was returned.
		//If so, ask the user to pick a value.
		//If not, return true.
	
	}
//Checks to see if the user actually picked a value from the drop-down menu.
//If not, asks the user to pick a state.
	
function validateForm()
	{
		var cardNumberBool = false;
		var cvcBool = false;
		var emailAddrBool = false;
		var exprDateBool = false;
		var stateBool = false;
		var zipCodeBool = false;
		//Booleans to determine if a test passed.
		
		
		var cardNumberWidget = document.getElementById("cardNumber");
		var cvcWidget = document.getElementById("CVC");
		var emailAddrWidget = document.getElementById("email");
		var exprDateWidget = document.getElementById("exp_date");
		var stateWidget = document.getElementById("States");
		var zipCodeWidget = document.getElementById("zip");
		//Obtain user input from the widgets by their unique IDs.
		
		zipCodeBool = validateControl(zipCodeWidget, zipCodeWidget.name, 5);
		
			if(zipCodeBool === false)
				{
					return false;
				}
				
		emailAddrBool = validateEmail(emailAddrWidget);
		
			if(emailAddrBool === false)
				{
					return false;
				}
				
		cardNumberBool = validateCreditCard(cardNumberWidget);
		
			if(cardNumberBool === false)
				{
					return false;
				}		
		
		cvcBool = validateControl(cvcWidget, cvcWidget.name, 3);
		
			if(cvcBool === false)
				{
					return false;
				}
				
		stateBool = validateState(stateWidget);
		
			if(stateBool === false)
				{
					return false;
				}		
		
		exprDateBool = validateDate(exprDateWidget);
		
			if(exprDateBool === false)
				{
					return false;
				}	
		//If a prior test failed, we wait until that value is fixed before checking other values.
		
		if((cardNumberBool === true) && (cvcBool === true) && (emailAddrBool === true) && (exprDateBool === true) && (stateBool === true) && (zipCodeBool === true))
			{
				window.alert("Payment Submitted.");
			}
			
		return false;
	}
//Checks to see if every widget in the HTML form has proper input.
//Calls several functions to validate input and inform the user if input is incorrect.
//If all user inputs are valid, informs the user that payment was accepted.
//Does not actually submit anything since it always returns false.