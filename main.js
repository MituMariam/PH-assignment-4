 //first class event
//         const event = document.getElementById("add-class");
//         event.addEventListener('click', function(){
//         const classValue = document.getElementById("class-value");
//         const qtyValue = parseInt(classValue.value);
//         const totalQtyValue = qtyValue + 1;
//         classValue.value = totalQtyValue;
//         const totalAmount = totalQtyValue * 10;
//         document.getElementById("class-total").innerText = `$${totalAmount}`;

// })
//      document.getElementById("minus-class").addEventListener('click', function(){
//         const classValue = document.getElementById("class-value");
//         const qtyValue = parseInt(classValue.value);
//         const totalQtyValue = qtyValue - 1;
//         classValue.value = totalQtyValue;
//         const totalAmount = totalQtyValue * 10;
//         document.getElementById("class-total").innerText = `$${totalAmount}`;

// })

function handleBooking(id,isIncrease){
    const inputValue = getValue(id);
    let updateValue = inputValue;
    if(isIncrease == true){
        updateValue = inputValue + 1;
    }
    if(isIncrease == false & inputValue > 0){
        updateValue = inputValue - 1;

    }
document.getElementById(id + '-value').value = updateValue;
let totalAmount = 0;
if(id == "class"){
    totalAmount = updateValue * 10;
}
if(id == "economy"){
    totalAmount = updateValue * 100;
}
document.getElementById(id + '-total').innerText = '$' + totalAmount;
calcGrandTotal();  
}

//grand total calculation
function calcGrandTotal(){
    const classValue = getValue("class");
    const economyValue = getValue("economy");

    const subTotal = classValue * 10 + economyValue * 100;
    document.getElementById("sub-total").innerText = subTotal;

    const vat = Math.round(subTotal * 0.1);
    document.getElementById("vat").innerText = vat;

    const grandTotal = subTotal + vat;
    document.getElementById("grand-total").innerText = grandTotal;
}
//read value
function getValue(id){
    const inputValue = document.getElementById(id + '-value');
    const qtyValue = parseInt(inputValue.value);
    return qtyValue;
}