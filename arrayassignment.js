
let productsarray = [
    {
        productid: 0,
        productname: 'Coffee',
        productqty: 50,
        productstatus: false
    },
    {
        productid: 0,
        productname: 'Tea',
        productqty: 50,
        productstatus: false
    },
    {
        productid: 0,
        productname: 'Milk',
        productqty: 50,
        productstatus: true
    },
    {
        productid: 0,
        productname: 'Cold Drink',
        productqty: 50,
        productstatus:true
    },
    {
        productid: 0,
        productname: 'new item',
        productqty: 50,
        productstatus:false
    },
    {
        productid: 0,
        productname: 'new item 2',
        productqty: 50,
        productstatus:true
    }
]

let newproduct = [];

productsarray.forEach(function(element,index){
    if(element.productstatus==true){
        newproduct.push(element);
    }
    else{
        console.log("Product not found on index"+' '+ index);
    }
})
console.log(newproduct);