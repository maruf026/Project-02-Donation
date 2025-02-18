document.getElementById('donate-btn').addEventListener('click',function(){
    let accountBalance= getTextValueById('account-balance');
    let totalDonation= getTextValueById('total-donation');
    let donateAmount= getInputValueById('donate-input');
    if(donateAmount > 0){
        let newdonateamount= totalDonation+donateAmount;
        let newAcountBalance= accountBalance-donateAmount;
        document.getElementById('total-donation').innerText=newdonateamount;
        document.getElementById('account-balance').innerText=newAcountBalance;

      
    }
    else{alert('Please enter valid amount')}
})