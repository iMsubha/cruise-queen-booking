
function handleTicketChanges(seatingClass, isIncrease){
    let ticketNumber = getInputNumber(seatingClass +'-count');
    if(isIncrease == true){
        const newTicket = ticketNumber + 1;
        //document.getElementById('firstClass-count').value = newTicket;
        setValue(seatingClass +'-count', newTicket);
    }
    if(isIncrease == false && ticketNumber>0){
    const newTicket = ticketNumber - 1;
    //document.getElementById('firstClass-count').value = newTicket;
    setValue(seatingClass +'-count', newTicket);
    }
}

function setValue(id, newTicketNumber){
    document.getElementById(id).value = newTicketNumber;
}
function getInputNumber(id){
    const inputNumber = parseInt(document.getElementById(id).value); 
    return inputNumber;
}


