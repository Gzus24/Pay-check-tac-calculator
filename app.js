const applyTaxBtn = document.getElementById('btn');
const showNetPay = document.querySelector('.result');
const fedTaxExcluded = document.querySelector('.span');

class NetPay{
    constructor(hour, payRate){
        this.hour = hour;
        this.payRate = payRate;
    }
    calculate(){
        let taxRate = 0.0765;
        let grossPay = this.hour * this.payRate;
        let taxDeduction = grossPay * taxRate;
        if(isNaN(taxDeduction)){
            showNetPay.textContent = "Enter a number"
        }
        else {
            showNetPay.textContent =  `$ ${Math.floor(grossPay - taxDeduction)}`;
            fedTaxExcluded.textContent = '(federal income taxes not included)';
        }
    }
}

applyTaxBtn.onclick = ()=>{
    const hours = parseInt(document.getElementById('hour').value);
    const hourRate = parseInt(document.getElementById('hrRate').value);
    let employee = new NetPay(hours, hourRate);
    employee.calculate();
}