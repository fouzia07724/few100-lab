
import './styles.css';
import { calctipAmount } from './math';
console.log('Ready to Party With Some TypeScript!');




const tip10percentBtn = document.getElementById('btn10');
const tip15percentBtn = document.getElementById('btn15');
const tip20percentBtn = document.getElementById('btn20');

tip10percentBtn.addEventListener('click', handleClickOnBtn10Percent);
tip15percentBtn.addEventListener('click', handleClickOnBtn15Percent);
tip20percentBtn.addEventListener('click', handleClickOnBtn20Percent);

function handleClickOnBtn10Percent() {
    document.getElementById('btn10').setAttribute('disabled', 'disabled');
    document.getElementById('btn15').removeAttribute('disabled');
    document.getElementById('btn20').removeAttribute('disabled');

    calculateTipAmounts(10);


}

function handleClickOnBtn15Percent() {

    document.getElementById('btn10').removeAttribute('disabled');
    document.getElementById('btn15').setAttribute('disabled', 'disabled');
    document.getElementById('btn20').removeAttribute('disabled');
    calculateTipAmounts(15);



}

function handleClickOnBtn20Percent() {

    document.getElementById('btn10').removeAttribute('disabled');
    document.getElementById('btn15').removeAttribute('disabled');
    document.getElementById('btn20').setAttribute('disabled', 'disabled');
    calculateTipAmounts(20);



}

function handleClickOnBillAmount() {

}

function calculateTipAmounts(tipPercent: number) {



    const amt = document.getElementById('amount') as HTMLInputElement;

    if (amt.valueAsNumber <= 0) {
        amt.className = 'redBorder';
        document.getElementById("tipping").innerHTML = '';
        document.getElementById("billAmt").innerHTML = '';
        document.getElementById("tipAmt").innerHTML = '';
        document.getElementById("tipPerc").innerHTML = '';
        document.getElementById("total").innerHTML = '';

    }

    else {
        amt.className = 'blackBorder';
        const tp = calctipAmount(amt.valueAsNumber, tipPercent)
        const totalBill = (amt.valueAsNumber + (amt.valueAsNumber * (tipPercent / 100))).toFixed(2);

        document.getElementById("tipping").innerHTML = tipPercent.toString();
        document.getElementById("billAmt").innerHTML = amt.valueAsNumber.toFixed(2).toString();
        document.getElementById("tipAmt").innerHTML = tp.toString();
        document.getElementById("tipPerc").innerHTML = tipPercent.toString();
        document.getElementById("total").innerHTML = totalBill.toString();
    }

}





