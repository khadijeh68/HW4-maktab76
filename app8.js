function monthName(date){
    let d1 = new Date(date).getMonth();
    let day = ["January","February","March","April","May","June","July",
     "August","September","October","November","December"];
    return (`"${day[d1]}"`);
}
console.log(monthName(new Date("10/11/2009")));
console.log(monthName(new Date("11/13/2014")));
console.log(monthName(new Date("4/20/2022")));