// mobileMinuit.js 

// Mobile Minuit Cost JS function code 1
/* function mobileMinuteCalculate(minuit, day, taka) {
    var PackRate = taka / minuit;
    return PackRate.toFixed(3);
}*/
function mobileMinuteCalculate(minuit, taka) {
    var PackRate = taka / minuit;
    return PackRate.toFixed(3);
}

// Mobile Minuit Cost JS function code 2 - it is impotent do no delete
function calculateMobile() {
    var minuit = parseInt(document.getElementById("mobileMinuit").value);
    // var day = parseInt(document.getElementById("mobileDay").value);
    var taka = parseInt(document.getElementById("mobileTaka").value);

    // Check if any input field is empty or contains NaN
    // if (isNaN(minuit) || isNaN(day) || isNaN(taka)) {
    //     alert("Please enter valid values for all input fields.");
    //     return;
    // }
    if (isNaN(minuit) || isNaN(taka)) {
        alert("Please enter valid values for all input fields.");
        return;
    }

    // var result = mobileMinuteCalculate(minuit, day, taka);
    var result = mobileMinuteCalculate(minuit, taka);
    //  If you buy 3000 minutes at Tk 30, the cost per minute will be Tk 41
    var listItem = document.createElement("li");
    listItem.textContent = "(" + taka + ") টাকায় (" + minuit + ") মিনিট কিনলে, প্রতি মিনিটের দাম = " + result + " টাকা হবে";
    // listItem.textContent = "Cost Result: " + result + "/= taka";
    listItem.classList.add("list-inside", "list-decimal", "border-b"); // Add CSS class
    document.getElementById("mobileResults").appendChild(listItem);

    // Update maximum and minimum results
    var maxResult = parseFloat(document.getElementById("maxMobileResult").textContent || 0);
    var minResult = parseFloat(document.getElementById("minMobileResult").textContent || Number.MAX_VALUE);

    if (parseFloat(result) > maxResult) {
        document.getElementById("maxMobileResult").textContent = result;
        // document.getElementById("maxMobileResult").textContent = "High Cost: " + result.toFixed(3);
        // document.getElementById("maxMobileResult").textContent = "High Cost: " + parseFloat(result).toFixed(3);
        document.getElementById("maxMobileResultBox").style.display = "block";
    }

    if (parseFloat(result) < minResult) {
        document.getElementById("minMobileResult").textContent = result;
        // document.getElementById("minMobileResult").textContent = "Low Cost: " + result.toFixed(3); 
        // document.getElementById("minMobileResult").textContent = "Low Cost: " + parseFloat(result).toFixed(3); // Append extra text
        document.getElementById("minMobileResultBox").style.display = "block";
    }

}

//  Mobile Minuit Cost JS function code 2 - it is impotent how add text in variable and string. So, do no delete
/* function calculateMobile() {
    var minuit = parseInt(document.getElementById("mobileMinuit").value);
    var day = parseInt(document.getElementById("mobileDay").value);
    var taka = parseInt(document.getElementById("mobileTaka").value);
    
    // Check if any input field is empty or contains NaN
    if (isNaN(minuit) || isNaN(day) || isNaN(taka)) {
        alert("Please enter valid values for all input fields.");
        return;
    }
    
    var result = mobileMinuteCalculate(minuit, day, taka);
//  listItem.textContent = "(" + taka +") টাকায় ("+minuit+") মিনিট কিনলে, প্রতি মিনিটের দাম = " + result + " টাকা হবে";
    // Result showing as list formate
    var listItem = document.createElement("li");
    listItem.classList.add("list-inside", "list-decimal", "border-b");
    
    // Create a text node for the "Cost Result: " part
    // var prefixText = document.createTextNode("Cost Result: "); 
    var prefixText = document.createTextNode("(" + taka +") টাকায় ("+minuit+") মিনিট কিনলে, প্রতি মিনিটের দাম = ");
    listItem.appendChild(prefixText);
    
    // Create a <span> element for the result value
    var resultSpan = document.createElement("span");
    resultSpan.textContent = result;
    resultSpan.style.fontWeight = "bold"; // Make the result part bold
    listItem.appendChild(resultSpan);
    
    // Create a text node for the "/= taka" part
    var suffixText = document.createTextNode(" টাকা হবে");
    listItem.appendChild(suffixText);
    
    document.getElementById("mobileResults").appendChild(listItem);
    
    
    // Update maximum and minimum results
    var maxResult = parseFloat(document.getElementById("maxMobileResult").textContent || 0);
    var minResult = parseFloat(document.getElementById("minMobileResult").textContent || Number.MAX_VALUE);
    
    if (parseFloat(result) > maxResult) {
        document.getElementById("maxMobileResult").textContent = "High Cost: " + parseFloat(result).toFixed(3);
        document.getElementById("maxMobileResultBox").style.display = "block";
    }
    
    if (parseFloat(result) < minResult) {
        document.getElementById("minMobileResult").textContent = "Low Cost: " + parseFloat(result).toFixed(3);
        document.getElementById("minMobileResultBox").style.display = "block";
    }

}*/


// Mobile Minuit Cost DOM Related  
function resetMobile() {
    document.getElementById("mobileMinuit").value = "";
    // document.getElementById("mobileDay").value = "";
    document.getElementById("mobileTaka").value = "";
    document.getElementById("maxMobileResult").textContent = "";
    document.getElementById("minMobileResult").textContent = "";
    document.getElementById("maxMobileResultBox").style.display = "none";
    document.getElementById("minMobileResultBox").style.display = "none";
    document.getElementById("mobileResults").innerHTML = "";
}

// Toggle function for Mobile Minuit Cost button
/*function toggleCalculator() {
    var calculator = document.getElementById("calculator");
    if (calculator.style.display === "none" || calculator.style.display === "") {
        calculator.style.display = "block";
    } else {
        calculator.style.display = "none";
    }
}*/

// Toggle function for Mobile Minuit Cost button  Update code
function toggleCalculator() {
    var calculator = document.getElementById("calculator");
    var button = document.querySelector('.calculator-toggle-button');

    if (calculator.style.display === "none" || calculator.style.display === "") {
        calculator.style.display = "block";
        button.textContent = "Mobile Minuit Cost close";
    } else {
        calculator.style.display = "none";
        button.textContent = "Mobile Minuit Cost open";
    }
}
