function converter(){
    let mile;
    mile=document.getElementById('mileinput').value;
    
    let mtok=mile*1.60934;
    document.getElementById('kminput').value=mtok;
    
    
}
function converterr(){
    let km;
    
    km=document.getElementById('kminput').value;
    let ktom=km/1.60934;
    document.getElementById('mileinput').value=ktom;
    
}


