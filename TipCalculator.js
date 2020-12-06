function hideTotals() {
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("tipEach").style.display = "none";
  document.getElementById("totalBill").style.display = "none";
  document.getElementById("billEach").style.display = "none";  
};

function getInput() {
  const billAmountValue = document.getElementById("billAmount").value;
  const serviceQualityValue = document.getElementById("serviceQuality").value;
  const numOfPeopleValue = document.getElementById("totalPeople").value;
  return {billAmount: billAmountValue, serviceQuality: serviceQualityValue, numOfPeople: numOfPeopleValue};
};

function validateInput(input) {
  if (input.billAmount === "" || isNaN(input.billAmount) || input.serviceQuality == 0) {
    alert("Error: Please enter a valid bill number and select service quality");
    return false;
  }

  if (isNaN(input.numOfPeople)) {
    alert("Error: Please enter a valid number");
    return false;
  }

  if (input.numOfPeople === "" || input.numOfPeople <= 1 ) {
    input.numOfPeople = 1;
    document.getElementById("tipEach").style.display = "none";
    document.getElementById("billEach").style.display = "none";
  } else {
    document.getElementById("tipEach").style.display = "inline";
    document.getElementById("billEach").style.display = "inline";
  }
};

function calculateTip(input) {
  var totalTip = (input.billAmount * input.serviceQuality) / input.numOfPeople;
  var totalBill = (input.billAmount / input.numOfPeople) + totalTip;
  //round to two decimal places
  totalTip = Math.round(totalTip * 100) / 100;
  totalBill= Math.round(totalBill * 100) / 100;
  //next line allows us to always have two digits after decimal point
  totalTip = totalTip.toFixed(2);
  totalBill = totalBill.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = `£${totalTip}`;
  //Display the bill total
  document.getElementById("totalBill").style.display = "block";
  document.getElementById("bill").innerHTML = `£${totalBill}`;
};

function TipCalculator() {
  const input = getInput();
  var validation = validateInput(input);
  if (validation !== false) {
    calculateTip(input);
  }
};

function reset() {
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("tipEach").style.display = "none";
  document.getElementById("totalBill").style.display = "none";
  document.getElementById("billEach").style.display = "none"; 
  billAmountValue = document.getElementById("billAmount").value = "";
  serviceQualityValue = document.getElementById("serviceQuality").value = 0;
  numOfPeopleValue = document.getElementById("totalPeople").value = "";
};

//Hide the tip amount on load
hideTotals();

//click to call TipCalculator function
document.getElementById("calculate").onclick = function() {
  TipCalculator();
};

//click to call reset function
document.getElementById("reset").onclick = function() {
  reset();
};

