function handleTicketChanges(seatingClass, isIncrease){
    let ticketNumber = getInputTicketNumber(seatingClass +'-count');
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
    const firstClassTotalTicket = getInputTicketNumber('firstClass-count');
    const economyClassTotalTicket =getInputTicketNumber('economyClass-count');
    const subTotalCost = firstClassTotalTicket*firstClassPrice + economyClassTotalTicket * economyClassPrice;
    const totalVat = Math.round(subTotalCost * 0.1); 
    const finalCost = subTotalCost + totalVat;

    
    setUpdatedCost('total-cost',subTotalCost);
    setUpdatedCost('total-cost-modal',subTotalCost);
    setUpdatedCost('total-vat',totalVat);
    setUpdatedCost('total-vat-modal',totalVat);
    setUpdatedCost('final-cost',finalCost);
    setUpdatedCost('final-cost-modal',finalCost);
}
function handleBooking(){
    const startingPoint = document.getElementById('starting-point').placeholder;
    const endingPoint = document.getElementById('ending-point').placeholder;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    setBookingDetails('starting-point-modal',startingPoint);
    setBookingDetails('ending-point-modal',endingPoint);
    setBookingDetails('departure-date-modal',departureDate);
    setBookingDetails('return-date-modal',returnDate);
    calculateTotalCost();
}
function setBookingDetails(id, bookingDetails){
    document.getElementById(id).innerText = bookingDetails;
}
function setUpdatedCost(id, totalCost){
    document.getElementById(id).innerText = "$"+ totalCost;
}
function setValue(id, newTicketNumber){
    document.getElementById(id).value = newTicketNumber;
}
function getInputTicketNumber(id){
    const inputNumber = parseInt(document.getElementById(id).value); 
    return inputNumber;
}


