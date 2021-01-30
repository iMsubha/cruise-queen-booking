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
    setInnerText('total-cost-modal',subTotalCost);
    setInnerText('total-vat',totalVat);
    setInnerText('total-vat-modal',totalVat);
    setInnerText('final-cost',finalCost);
    setInnerText('final-cost-modal',finalCost);
}
function handleBooking(){
    const startingPoint = document.getElementById('starting-point').placeholder;
    const endingPoint = document.getElementById('ending-point').placeholder;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    setInnerString('starting-point-modal',startingPoint);
    setInnerString('ending-point-modal',endingPoint);
    setInnerString('departure-date-modal',departureDate);
    setInnerString('return-date-modal',returnDate);
    calculateTotalCost();
}
function setInnerString(id, point){
    document.getElementById(id).innerText = point;
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


