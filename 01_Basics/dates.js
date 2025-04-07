console.log("Radhe Radhe");

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof(myDate));
// let myCreatedDate = new Date(2025,0,2);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2025,0,2,13,31,0);


// // console.log(myCreatedDate.toLocaleString());
// let myTimeStamp = Date.now();
// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// // console.log(newDate);
// // console.log(newDate.getMonth()+1);
// // console.log(newDate.getDay());

// console.log(`The month is ${newDate.getMonth() +1}th and the day is ${newDate.getDay()}`
// ); //STRING INTERPOLATION

console.log(newDate.toLocaleString('default',{
    // dateStyle : "medium",
    month: "2-digit"
}));


console.log(newDate.month);







