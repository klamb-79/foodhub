
 function sendwhatsapp() {
    var resterant = "Wing Stop";
    var fullname = document.form_main.fullname.value;
    var phonenumber = document.form_main.phonenumber.value;
    var orderdetails= document.form_main.orderdetails.value;
    var address= document.form_main.address.value;
    var delivery = document.form_main.delivery1;
    var delivery2 = document.form_main.delivery2;
    if(delivery.checked==true){
        var del = document.form_main.delivery1.value;
    }
    if(delivery2.checked==true){
        var del = document.form_main.delivery2.value;
    }
       

    var url = "https://api.whatsapp.com/send?phone=5016153524&text="
    + resterant + "%0a"
    + "%0a"
    + "%0a"
    + "%0a"
    +"Full Name: " + fullname + "%0a"
    + "%0a"
    +"Phone Number: " + phonenumber + "%0a"
    + "%0a"
    +"Address: " + address + "%0a"
    +"%0a"
    +"Order: " + orderdetails + "%0a"
    +"%0a"
    +"Delivery/Pickup Status: " + del + "%0a";
    var end_url = `${url}`;
    window.location.href = end_url;
    // document.getElementById('end_url').innerText = end_url;
  };




  
