function fdCalculator() {
    let main_amount = parseFloat(document.getElementById('main_amount').value);
    let interest_rate = parseFloat(document.getElementById('int_rate').value);
    let years_tenute = parseFloat(document.getElementById('years').value);
    let result;
    if ((main_amount.toString() === 'NaN') || (interest_rate.toString() === 'NaN') || (years_tenute.toString() === 'NaN')) {
        console.log("error");
        if ((main_amount.toString() === 'NaN')) {
            document.getElementById('pren_req').style.display = 'block';
        } else {
            document.getElementById('pren_req').style.display = 'none';
        }

        if ((interest_rate.toString() === 'NaN')) {
            document.getElementById('interest_req').style.display = 'block';
        } else {
            document.getElementById('interest_req').style.display = 'none';
        }

        if ((years_tenute.toString() === 'NaN')) {
            document.getElementById('tenure').style.display = 'block';
        } else {
            document.getElementById('tenure').style.display = 'none';
        }
        return -1;
    }
    else {
        document.getElementById('pren_req').style.display = 'none';
        document.getElementById('interest_req').style.display = 'none';
        document.getElementById('tenure').style.display = 'none';
    }
    result = main_amount + ((years_tenute * interest_rate * main_amount) / 100);


    document.getElementById('maturity_amount').innerHTML = "Maturity Amount " + result;

}

document.getElementById('submit').addEventListener('click', fdCalculator);