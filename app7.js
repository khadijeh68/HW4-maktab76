function curday(sign){
    let d1 = new Date();
    let date = (d1.getMonth()+1) + sign + d1.getDate() + sign + d1.getFullYear();
    return date;
}
console.log(curday('/'));
console.log(curday('-'));