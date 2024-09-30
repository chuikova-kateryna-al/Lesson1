var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };

function price (){

    var totalPrice = 0;
    
    for (let key in services){
        var sliceTo = services[key].indexOf(" ");
        var oneServicePrice = Number(services[key].slice(0, sliceTo))
        var totalPrice = totalPrice + oneServicePrice
    }
    console.log(totalPrice + ' грн')
}

function minPrice (){

    var priceRange = [];
    
    for (let key in services){
        var sliceTo = services[key].indexOf(" ");
        var oneServicePrice = Number(services[key].slice(0, sliceTo));
        priceRange.push(oneServicePrice)
    }

    console.log(Math.min.apply(Math, priceRange) + ' грн')  
    
}

function maxPrice (){

    var priceRange = [];
    
    for (let key in services){
        var sliceTo = services[key].indexOf(" ");
        var oneServicePrice = Number(services[key].slice(0, sliceTo));
        priceRange.push(oneServicePrice)      
    }

    console.log(Math.max.apply(Math, priceRange) + ' грн')
   
}

services.збитки = "200 грн";

price();
minPrice();
maxPrice()
