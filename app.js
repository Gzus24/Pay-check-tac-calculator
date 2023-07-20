const btnCalculate = document.getElementById('work');
const spanOne = document.querySelector('.first');
const spanTwo = document.querySelector('.second');

class PayDay{
    constructor(hours, payRate){
        this.hours = hours;
        this.payRate = payRate;
      
       this.execute = ()=>{
            let grossPay = (hours * payRate)
            let deduction = grossPay * 0.0765
            if(isNaN(deduction)){
                document.querySelector('.result').textContent = "Enter a number"
            }
            else {
                document.querySelector('.result').textContent =  '$' + Math.floor(grossPay - deduction);
                document.querySelector('.third').textContent = '(federal income taxes not included)';
            }
        }
    }
}

btnCalculate.onclick = ()=>{
    const hoursWorked = parseInt(document.getElementById('hrsWorked').value);
    const hourlyPay = parseInt(document.getElementById('hourly').value);
    let userOne= new PayDay(hoursWorked, hourlyPay);
    userOne.execute()
}