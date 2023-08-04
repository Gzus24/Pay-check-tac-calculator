function NetPay(){
    const applyTaxBtn = document.getElementById('btn');
    const showNetPay = document.querySelector('.result');
    const fedTaxExcluded = document.querySelector('.span');

    this.getInputVal = function(){
        applyTaxBtn.onclick = ()=>{
            const hours = parseInt(document.getElementById('workHr').value);
            const hourRate = parseInt(document.getElementById('hrRate').value);
         
           this.getNetPay(hours, hourRate)
        }
      
    }
    this.getNetPay = (hour, payRate)=>{
        let taxRate = 0.0765;
            let grossPay = hour * payRate;
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
    const pay = new NetPay();
    pay.getInputVal()
   
         