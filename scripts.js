function handleTicketChanges(seatingClass, isIncrease){
    let ticketNumber = getInputNumber(seatingClass +'-count');
    if(isIncrease == true){
        const newTicket = ticketNumber + 1;
        setValue(seatingClass +'-count', newTicket);
    }
    if(isIncrease == false && ticketNumber>0){
    const newTicket = ticketNumber - 1;
    setValue(seatingClass +'-count', newTicket);
    }
    calculateTotalCost();
}
function calculateTotalCost(){
    const firstClassPrice = 150;
    const economyClassPrice = 100;
    const firstClassTotalTicket = getInputNumber('firstClass-count');
    const economyClassTotalTicket =getInputNumber('economyClass-count');
    const subTotalCost = firstClassTotalTicket*firstClassPrice + economyClassTotalTicket * economyClassPrice;
    const totalVat = Math.round(subTotalCost * 0.1); 
    const finalCost = subTotalCost + totalVat;

    
    setInnerText('total-cost',subTotalCost);
    setInnerText('total-vat',totalVat);
    setInnerText('final-cost',finalCost);
}
function setInnerText(id, totalCost){
    document.getElementById(id).innerText = "$"+ totalCost;
}
function setValue(id, newTicketNumber){
    document.getElementById(id).value = newTicketNumber;
}
function getInputNumber(id){
    const inputNumber = parseInt(document.getElementById(id).value); 
    return inputNumber;
}


