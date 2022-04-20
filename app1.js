function exponentOfNumber(x , n){
    if (n === 0){
        return 1;
    }else if (n === 1){
        return x;
    }else{
        return x * exponentOfNumber(x , n-1);
    }
}
console.log(exponentOfNumber(4 , 2));
