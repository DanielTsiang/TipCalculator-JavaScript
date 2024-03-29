function hideTotals() {
	document.getElementById("totalTip").style.display = "none";
	document.getElementById("tipEach").style.display = "none";
	document.getElementById("totalBill").style.display = "none";
	document.getElementById("billEach").style.display = "none";
}

function getInput() {
	let billAmount = document.getElementById("billAmount").value;
	const serviceQuality = document.getElementById("serviceQuality").value;
	let numOfPeople = document.getElementById("totalPeople").value;

	// remove commas from string
	billAmount = billAmount.replace(/,/g, '');
	numOfPeople = numOfPeople.replace(/,/g, '');

	if (numOfPeople === "" || numOfPeople <= 1 ) {
		numOfPeople = 1;
	}

	return [billAmount, serviceQuality, numOfPeople];
}

function validateInput(input) {
	const [billAmount, serviceQuality, numOfPeople] = input;
	if (billAmount === "" || isNaN(billAmount) || serviceQuality == 0) {
		alert("Error: Please enter a valid bill number and select service quality");
		return false;
	}

	if (isNaN(numOfPeople)) {
		alert("Error: Please enter a valid number");
		return false;
	}

	if (numOfPeople === 1 ) {
		document.getElementById("tipEach").style.display = "none";
		document.getElementById("billEach").style.display = "none";
	} else {
		document.getElementById("tipEach").style.display = "inline";
		document.getElementById("billEach").style.display = "inline";
	}
}

function calculateTip(input) {
	const [billAmount, serviceQuality, numOfPeople] = input;
	let totalTip = (billAmount * serviceQuality) / numOfPeople;
	let totalBill = (billAmount / numOfPeople) + totalTip;

	// round to two decimal places
	totalTip = Math.round(totalTip * 100) / 100;
	totalBill= Math.round(totalBill * 100) / 100;

	// next line allows us to always have two digits after decimal point
	totalTip = totalTip.toFixed(2);
	totalBill = totalBill.toFixed(2);

	// Display the tip
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = `£${totalTip}`;

	// Display the bill total
	document.getElementById("totalBill").style.display = "block";
	document.getElementById("bill").innerHTML = `£${totalBill}`;
}

function TipCalculator() {
	let input = getInput();
	let validation = validateInput(input);
	if (validation !== false) {
		calculateTip(input);
	}
}

function reset() {
	document.getElementById("totalTip").style.display = "none";
	document.getElementById("tipEach").style.display = "none";
	document.getElementById("totalBill").style.display = "none";
	document.getElementById("billEach").style.display = "none";
	billAmountValue = document.getElementById("billAmount").value = "";
	serviceQualityValue = document.getElementById("serviceQuality").value = 0;
	numOfPeopleValue = document.getElementById("totalPeople").value = "";
}

// Hide the tip amount on load
hideTotals();

// click to call TipCalculator function
document.getElementById("calculate").onclick = function() {
	TipCalculator();
};

// click to call reset function
document.getElementById("reset").onclick = function() {
	reset();
};

// Wait for the DOM to be ready
$(function() {
    // Initialise AutoNumeric on number input forms
    new AutoNumeric("#billAmount", {decimalPlaces: 2, minimumValue: 0});
    new AutoNumeric("#totalPeople", {decimalPlaces: 0, minimumValue: 0});
});

