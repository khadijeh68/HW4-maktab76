function removeValue(array){
    let arr = array.filter(function(item){
        if(item !== null || item !== 0 || item !== false 
         || item !== NaN || item !== undefined || item !== '""'){
            return item;
        }
    });
        console.log(arr);
}
let arr2 = [null , 0 , 1 , "hello" , undefined , 2 , 3 , NaN , "" , false];
removeValue(arr2);