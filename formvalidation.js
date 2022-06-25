// document.getElementById("errorspan").innerHTML='It is working';
function namevalidation(){
    var name=document.getElementById('exampleInputName').value;
   
    if(name.length>=5){
        var error="";
        document.getElementById("nameHelp").innerHTML=error;
        returnvalue=false;
    }
    else{
        
            var error="Characters Must be greater than 5 characters";
            document.getElementById("nameHelp").innerHTML=error;
            returnvalue=false;
        
    }
}
function emailvalidation(){
    var email=document.getElementById('exampleInputEmail').value;
   
    if(email.length>=5){
        var error="";
        document.getElementById("emailHelp").innerHTML=error;
        returnvalue=false;
    }
    else{
        
            var error="Characters Must be greater than 5 characters";
            document.getElementById("emailHelp").innerHTML=error;
            returnvalue=false;
        
    }
}

