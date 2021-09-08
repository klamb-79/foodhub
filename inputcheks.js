



function inputcheck(){
    const fullname = document.getElementById('fullname');
    const phonenumber = document.getElementById('phonenumber');
    const address = document.getElementById('address');
    const orderdetails = document.getElementById('orderdetails');
    const form = document.getElementById('form');
    const errorelement = document.getElementById('error');
   
    var error = [];

    if(fullname.value === ''){
        error.push('cannot be blank.');
        small.innerText=error
    }
    if(phonenumber.value === ''){
        error.push('cannot be blank.');
        errorelement.innerText=error
    }
    
}

