function calculateTip() {

    //getElementById() method returns the element value with specified ID
    var billAmount = +document.getElementById("billAmount").value;
    var serviceQuality = +document.getElementById("serviceQuality").value;
    
    //Tip Calculation
    if (isNaN(billAmount)) {
        document.getElementById("tipTotal").innerHTML = "Please enter your bill amount";
    } else {
        tipTotal = billAmount * serviceQuality;
        billTotal = billAmount + tipTotal;
    }
     
    //Display  Tip
    if (isNaN(serviceQuality)) {
        document.getElementById("tipTotal").innerHTML = "Please select a service quality option from the dropdown menu";
    } else {
        document.getElementById("tipTotal").innerHTML = `£${tipTotal.toFixed(2)}`;
    }
    
    //Display Bill Total
    if (isNaN(serviceQuality)) {
        document.getElementById("billTotal").innerHTML = "";
    } else {
        document.getElementById("billTotal").innerHTML = `£${billTotal.toFixed(2)}`;
    }
}

document.getElementById("calculate").onclick = function() {
    calculateTip();
}