function pow (x,y)
{
    result = x;

    for (i = 1; i < y; i++ ){
        result = result*x;
    }
    return result;
}

var res = pow(12,6);
console.log(res);
