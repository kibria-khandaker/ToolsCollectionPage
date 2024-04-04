// mobileSMS.js

// Mobile Minuit Cost JS function code 1
function mobileSmsCalculate(sms, taka) {
    var PackRate = taka / sms;
    return PackRate.toFixed(3);
}

// Mobile sms Cost JS function code 2 - it is impotent do no delete
function calculateSmsMobile() {
    var sms = parseInt(document.getElementById("mobileSms").value);
    var taka = parseInt(document.getElementById("smsTaka").value);

    if (isNaN(sms) || isNaN(taka)) {
        alert("Please enter valid values for all input fields.");
        return;
    }

    var result = mobileSmsCalculate(sms, taka);
    var listItem = document.createElement("li");
    listItem.textContent = "(" + taka + ") টাকায় (" + sms + ") SMS কিনলে, প্রতি SMS এর দাম = " + result + " টাকা হবে";
    listItem.classList.add("list-inside", "list-decimal", "border-b"); // Add CSS class
    document.getElementById("mobileSmsResults").appendChild(listItem);

    // Update maximum and minimum results
    var maxResult = parseFloat(document.getElementById("maxSmsResult").textContent || 0);
    var minResult = parseFloat(document.getElementById("minSmsResult").textContent || Number.MAX_VALUE);

    if (parseFloat(result) > maxResult) {
        document.getElementById("maxSmsResult").textContent = result;
        document.getElementById("maxSmsResultBox").style.display = "block";
    }

    if (parseFloat(result) < minResult) {
        document.getElementById("minSmsResult").textContent = result;
        document.getElementById("minSmsResultBox").style.display = "block";
    }

}

// Mobile SMS Cost DOM Related  
function resetSmsMobile() {
    document.getElementById("mobileSms").value = "";
    document.getElementById("smsTaka").value = "";
    document.getElementById("maxSmsResult").textContent = "";
    document.getElementById("minSmsResult").textContent = "";
    document.getElementById("maxSmsResultBox").style.display = "none";
    document.getElementById("minSmsResultBox").style.display = "none";
    document.getElementById("mobileSmsResults").innerHTML = "";
}

// Toggle function for Mobile Minuit Cost button
function toggleSmsCalculator() {
    var calculator = document.getElementById("smsCalculator");
    var button = document.querySelector('.calculator-toggle-sms-button');

    if (calculator.style.display === "none" || calculator.style.display === "") {
        calculator.style.display = "block";
        button.textContent = "Mobile SMS Cost close";
    } else {
        calculator.style.display = "none";
        button.textContent = "Mobile SMS Cost open";
    }
}
