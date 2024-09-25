var count;
function checkProbabilityTheory(count){

        var evennum = 0;
        var oddnum = 0;
        
    for (i = 1; i <= count; i++ ){

        var num = Math.random()*901+100;
        var int = Math.trunc(num);
        console.log(int);
     
    if (int % 2 === 0){
        var evennum = evennum + 1;
    
    } else {
        
       var oddnum = oddnum + 1; 
    }

    }

    var perc = (evennum/oddnum)*100;
    console.log('Кількість згенерованих чисел: ' + count);
    console.log('Парних чисел: ' + evennum);
    console.log('Не парних чисел: ' + oddnum);
    console.log('Відсоткове відношення парних чисел до непарних:' + perc +'%');
    return res;
    
}

var res = checkProbabilityTheory(19);


