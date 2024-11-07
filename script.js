const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

let roman = "";

const arabicToRoman = (input) => {
  let curVal = input;
  //console.log("Current value:", curVal);
  //console.log("Current roman:", roman, "\n");

  //check from highest to lowest value (M until I)
  //then subtract value from input until input reaches 0

  if (curVal === 0) {
    //console.log(roman); 
    return roman;
  } else if (curVal >= 1000) {
    roman += "M";
    return arabicToRoman(curVal - 1000); 
  } else if (curVal >= 900) {
    roman += "CM";
    return arabicToRoman(curVal - 900)  
  } else if (curVal >= 500) {
    roman += "D";
    return arabicToRoman(curVal - 500); 
  } else if (curVal >= 400) {
    roman += "CD";
    return arabicToRoman(curVal - 400); 
  } else if (curVal >= 100) {
    roman += "C";
    return arabicToRoman(curVal - 100); 
  } else if (curVal >= 90) {
    roman += "XC";
    return arabicToRoman(curVal - 90); 
  } else if (curVal >= 50) {
    roman += "L";
    return arabicToRoman(curVal - 50); 
  } else if (curVal >= 40) {
    roman += "XL";
    return arabicToRoman(curVal - 40); 
  } else if (curVal >= 10) {
    roman += "X";
    return arabicToRoman(curVal - 10); 
  } else if (curVal >= 9) {
    roman += "IX";
    return arabicToRoman(curVal - 9);
  } else if (curVal >= 5) {
    roman += "V";
    return arabicToRoman(curVal - 5); 
  } else if (curVal >= 4) {
    roman += "IV";
    return arabicToRoman(curVal - 4); 
  } else if (curVal >= 1) {
    roman += "I";
    return arabicToRoman(curVal - 1); 
  }
}

//test
//console.log(arabicToRoman(1023));


const isValidInput = () => {
  let message = "";
  //converts str from numberInput into number/integer
  const numInt = parseInt(numberInput.value);

  if (!numInt || isNaN(numInt)) {
    message = "Please enter a valid number";
  } else if (numInt < 0) {
    message = "Please enter a number greater than or equal to 1"
  } else if (numInt >= 4000) {
    message = "Please enter a number less than or equal to 3999";
  } else {
    //convert
    message = arabicToRoman(numInt);
  }
  return message;
}

const showOutput = () => {
  output.textContent = isValidInput();
  numberInput.value = "";
  roman = "";
}

convertBtn.addEventListener("click", showOutput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showOutput();
  }
});