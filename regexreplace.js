let myname=[
    {
        name:'Mohsin',
        lastname: 'Zaheer'
    }
];
myname.forEach(function(element,index){
    // console.log(element.lastname);
    let check=element.name;
    let result=check.replace(/n/g,'oay');
    console.log(result);


})