let createlist=()=>{
    let userinput=document.querySelector('.userinput').value;
    let div=document.querySelector('.list');
    let ul=document.createElement('ul');
    let li=document.createElement('li');
    let text=document.createTextNode(`${userinput}`);
    ul.appendChild(li);
    li.appendChild(text);
    div.appendChild(ul);
}