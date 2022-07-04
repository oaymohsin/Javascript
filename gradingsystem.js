
let calculate=()=>{
    let math,english,computer,urdu;
math=document.getElementById("mathnbr").value;
english=document.getElementById("engnbr").value;
computer=document.getElementById("comnbr").value;
urdu=document.getElementById("urdunbr").value;
result=document.getElementById("resultarea");
    let totalmarks=400;
   

    if(math>100 ||english>100 || computer>100 || urdu>100 ){
        result.innerHTML="Numbers greater than 100 in any field are not allowed because total marks of every subject are 100";
    }
    else if(math<0 ||english<0 || computer<0 || urdu<0 ){
        result.innerHTML="Numbers less than 0 in any field are not allowed because minimum marks  of every subject could be 0";
    }
    else{
        let percentage=((parseInt(math)+parseInt(english)+parseInt(computer)+parseInt(urdu))*100)/400;
        if(percentage>85 && percentage<=100 ){
            result.innerHTML=`You got ${percentage}% marks and A+ Grade`;
        }
        else if(percentage<=85 && percentage>=80){
            result.innerHTML=`You got ${percentage}% marks and A Grade`;
        }
        else if(percentage<80 && percentage>=70){
            result.innerHTML=`You got ${percentage}% marks and B Grade`;
        }
        else if(percentage<70 && percentage>=50){
            result.innerHTML=`You got ${percentage}% marks and C Grade`;
        }
        else if(percentage<50 && percentage>=33){
            result.innerHTML=`You got ${percentage}% marks and B Grade`;
        }
        else{
            result.innerHTML=`You got ${percentage}% marks and you are failed`;
        }
    }
    
}
function  reset (){
    //  document.getElementById('mathnbr').value="";
    document.getElementById("mathnbr").value="";
    document.getElementById("comnbr").value="";
    document.getElementById("urdunbr").value="";
    document.getElementById("engnbr").value="";
    document.getElementById("resultarea").innerHTML="";
    // result.innerHTML=`reset is working`;
}
// let validate=()=>{
//     let math,english,computer,urdu;
// math=document.getElementById("mathnbr").value;
// english=document.getElementById("engnbr").value;
// computer=document.getElementById("comnbr").value;
// urdu=document.getElementById("urdunbr").value;
// if (math>100){
//     document.getElementById("resultarea").innerHTML="*Number greater than 100 are not allowed";
// }
// else{
//     document.getElementById("resultarea").innerHTML="";

// }
// }