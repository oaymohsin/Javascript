let blackcoffee=()=>{
    document.getElementById('calculatetotal').disabled=false;
    document.getElementById('blackcmbtn').disabled=false;

    let price=100;
    let blackcoffeevalue=document.getElementById('blackcoffeeinput').value;
    if(blackcoffeevalue==""){
        document.getElementById('blackcoffeeinput').value=`${price}`;
        document.getElementById('blackcoffeequantity').value=`1`;
        document.getElementById('blackcoffeequantity').value;
    }
    else{
    document.getElementById('blackcoffeeinput').value=(price+parseInt(blackcoffeevalue));
    let quantity=parseInt((document.getElementById('blackcoffeeinput').value)/price);
    document.getElementById('blackcoffeequantity').value=quantity;
    }
}
let espresso=()=>{
    document.getElementById('calculatetotal').disabled=false;
    document.getElementById('espressombtn').disabled=false;


    let price=120;
    let blackcoffeevalue=document.getElementById('espressoinput').value;
    if(blackcoffeevalue==""){
        document.getElementById('espressoinput').value=`${price}`;
        document.getElementById('espressoquantity').value=`1`;
        document.getElementById('espressoquantity').value;
    }
    else{
    document.getElementById('espressoinput').value=(price+parseInt(blackcoffeevalue));
    let quantity=parseInt((document.getElementById('espressoinput').value)/price);
    document.getElementById('espressoquantity').value=quantity;
    }
}
let latte=()=>{
    document.getElementById('calculatetotal').disabled=false;
    document.getElementById('lattembtn').disabled=false;

    let price=150;
    let blackcoffeevalue=document.getElementById('latteinput').value;
    if(blackcoffeevalue==""){
        document.getElementById('latteinput').value=`${price}`;
        document.getElementById('lattequantity').value=`1`;
        document.getElementById('lattequantity').value;
    }
    else{
    document.getElementById('latteinput').value=(price+parseInt(blackcoffeevalue));
    let quantity=parseInt((document.getElementById('latteinput').value)/price);
    document.getElementById('lattequantity').value=quantity;
    }
}
let cappuccino=()=>{
    document.getElementById('calculatetotal').disabled=false;

    let price=200;
    let blackcoffeevalue=document.getElementById('cappuccinoinput').value;
    if(blackcoffeevalue==""){
        document.getElementById('cappuccinoinput').value=`${price}`;
        document.getElementById('cappuccinoquantity').value=`1`;
        document.getElementById('cappuccinoquantity').value;
    }
    else{
    document.getElementById('cappuccinoinput').value=(price+parseInt(blackcoffeevalue));
    let quantity=parseInt((document.getElementById('cappuccinoinput').value)/price);
    document.getElementById('cappuccinoquantity').value=quantity;
    }
}

var calculate=()=>{
    
    let bcprice,bcquantity,espressoprice,espressoquantity,latteprice,lattequantity,capprice,capquantity;
    bcprice=parseInt (document.getElementById('blackcoffeeinput').value);
    bcquantity=parseInt (document.getElementById('blackcoffeequantity').value);
    espressoprice=parseInt (document.getElementById('espressoinput').value);
    espressoquantity=parseInt (document.getElementById('espressoquantity').value);
    latteprice=parseInt (document.getElementById('latteinput').value);
    lattequantity=parseInt (document.getElementById('lattequantity').value);
    capprice=parseInt (document.getElementById('cappuccinoinput').value);
    capquantity=parseInt (document.getElementById('cappuccinoquantity').value);

    // if(bcprice=="0" && bcquantity=="0" && espressoprice=="0" && espressoquantity=="0" && latteprice=="0" &&lattequantity=="0" && capprice=="0" && capquantity=="0"){
    //     document.getElementById('calculatetotal').disabled=true;
    // }
    // else{
    //     document.getElementById('calculatetotal').disabled=false;

    let total_items=bcquantity+espressoquantity+lattequantity+capquantity;
    let total_price=bcprice+espressoprice+latteprice+capprice;
    result=document.getElementById('resultarea').innerHTML=`Total Items: ${total_items} \n Total Price: ${total_price} \n You have Buy: \n ${bcquantity} Black Coffee \n ${espressoquantity} Espresso \n ${lattequantity} Latte \n ${capquantity} Cappuccino `;
    document.getElementById('thanksarea').innerHTML=`Thanks for shopping here \n We expect your arrival again`;
    // result=`Total Items: ${total_items} /n Total Price: ${total_price}`;
    // alert(bcprice);
    // }
}
let minusblackcoffee=()=>{
    // document.getElementById('calculatetotal').disabled=false;

    let price=100;
    let blackcoffeevalue=document.getElementById('blackcoffeeinput').value;
    if(blackcoffeevalue=="0"){
        document.getElementById('blackcmbtn').disabled=true;  
    // document.getElementById('calculatetotal').disabled=true;

    }
    else{
        document.getElementById('blackcmbtn').disabled=false;
    document.getElementById('blackcoffeeinput').value=(parseInt(blackcoffeevalue)-price);
    let quantity=parseInt((document.getElementById('blackcoffeeinput').value)/price);
    document.getElementById('blackcoffeequantity').value=quantity;
    }
}
let minusespressocoffee=()=>{
    // document.getElementById('calculatetotal').disabled=false;

    let price=120;
    let blackcoffeevalue=document.getElementById('espressoinput').value;
    if(blackcoffeevalue=="0"){
        document.getElementById('espressombtn').disabled=true;  
    // document.getElementById('calculatetotal').disabled=true;

    }
    else{
        document.getElementById('espressombtn').disabled=false;
    document.getElementById('espressoinput').value=(parseInt(blackcoffeevalue)-price);
    let quantity=parseInt((document.getElementById('espressoinput').value)/price);
    document.getElementById('espressoquantity').value=quantity;
    }
}
let minuslatte=()=>{
    // document.getElementById('calculatetotal').disabled=false;

    let price=150;
    let blackcoffeevalue=document.getElementById('latteinput').value;
    if(blackcoffeevalue=="0"){
        document.getElementById('lattembtn').disabled=true;  
    // document.getElementById('calculatetotal').disabled=true;

    }
    else{
        document.getElementById('lattembtn').disabled=false;
    document.getElementById('latteinput').value=(parseInt(blackcoffeevalue)-price);
    let quantity=parseInt((document.getElementById('latteinput').value)/price);
    document.getElementById('lattequantity').value=quantity;
    }
}

