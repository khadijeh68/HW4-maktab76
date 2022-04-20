function convertsToUppercase(str){
    let arr = str.split(' ').map(function(item , index) {
       return item.charAt(0).toUpperCase()+item.slice(1); 
    }).join(' ')
    console.log(`'${arr}'`);
}
convertsToUppercase('the quick brown fox');