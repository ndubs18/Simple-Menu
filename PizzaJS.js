// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("makeButton");

// Gets the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Print labes for receipt


// Search for what check boxes are checked and get their values

var purchase = document.querySelectorAll(".radio");

var total = 0

function getValue() {
    for (i = 0; i < purchase.length; i++) {
        if (purchase[i].checked === true) {
            conv = parseInt(purchase[i].value)
            
            total += conv
        }
    }
    
}

// Selection for veggies

var veggies = document.querySelectorAll(".veggie-radio");

function vegEx() { 
    var veggieextras = 0
    for (i = 0; i < veggies.length; i++) {

        if (veggies[i].checked === true) {
            veggieextras += 1
        }
    }
    if (veggieextras === 1) {
        veggieextras = 0 
    }
    if (veggieextras > 1) {
        veggieextras = veggieextras - 1
    }
    
    total = total+veggieextras
    
}

// Selection for meats

var meaty = document.querySelectorAll(".meat-radio");

function meatEx() { 
    var meatextras = 0
    for (i = 0; i < meaty.length; i++) {

        if (meaty[i].checked === true) {
        meatextras += 1
        }
    }
    if (meatextras === 1) {
        meatextras = 0
    }
    if (meatextras > 1) {
        meatextras = meatextras - 1
    }
    total = total+meatextras
}




function showreceipt() {
    var getTot = document.getElementById('receipt');
    getTot.style.opacity = 1
    

}

function pushTot() {
document.getElementById("calctotal").innerHTML = "$" + total;
}

// compilation of functions for onclick event


function totalEve() {
    getValue();
    meatEx();
    vegEx();
    showreceipt();
    pushTot();  
}
    




