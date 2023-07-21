const btnCalculate = document.getElementById('btn');
const spanOne = document.querySelector('.first');
const spanTwo = document.querySelector('.second');
const result = document.querySelector('.result');
const fedTax = document.querySelector('.span');

class NetPay{
    constructor(hours, payRate){
        this.hours = hours;
        this.payRate = payRate;
    }
    calculate(){
        let grossPay = (this.hours * this.payRate)
        let deduction = grossPay * 0.0765
        if(isNaN(deduction)){
           result.textContent = "Enter a number"
        }
        else {
            result.textContent =  '$' + Math.floor(grossPay - deduction);
            fedTax.textContent = '(federal income taxes not included)';
        }
    }
}

btnCalculate.onclick = ()=>{
    const hoursWorked = parseInt(document.getElementById('hrsWorked').value);
    const hourlyPay = parseInt(document.getElementById('hourly').value);
    let userOne= new PayDay(hoursWorked, hourlyPay);
    userOne.calculate();
}