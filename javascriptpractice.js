function show(){
    var name,email;
    name=document.getElementById('name').value;
    email=document.getElementById('email').value;
    window.alert("Your name is"+" "+name+" "+"Your email is"+"    "+email);
}
function changetext(){
    var text;
   
    text="Text Changed";
    document.getElementById('para').innerHTML=text;
    
}