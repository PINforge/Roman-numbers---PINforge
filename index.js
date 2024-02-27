
//we create a function that will turn integer numbers to Roman numbers
function intToRoman(number) {
  //this if statement checks if the number is in range of 1 to 3999, if it is not they we return and empty string
  if (number < 1 || number > 3999) {
    return '';
  }
//here we create array-s since they can hold multiple values which we will need later
  const numeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  //right now we make a variable that is empty, but it will have our value later on
  let result = '';
  //for loop goes through the numeralValuess array and checks every number inside, or rather its index points
  for (let i = 0; i < numeralValues.length; i++) {
    /*when we got that we make a while which is going to run as long as our made up number is greater or
    equal to the current index in numeralValues array*/
    while (number >= numeralValues[i]) {
      /* if our made up number is greater or equal to the index we are on right now then we take that number
      and we pass its index number to our empty result variable*/
      result += numerals[i];
      /*here if for example the number u choose is 18, then since we figured out that part we takeaway that 10
      like 18 -> 18 - 10 = 8, we do that beacuse you know if u have 18 than it is a part of tens which we got rid of and now and we only have 8 left and now we check for that number and repeat everything until the code doesnt have anything more to calculate*/
      number -= numeralValues[i];
    }
  }
//the calculation you came up with, just give it to us in the result variable, we want to see the result ofcourse
  return result;
}

// Test the function
console.log(intToRoman(8)); // Output: "Roman letter of any type of number that u typed in"
