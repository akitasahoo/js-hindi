let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 =  new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 =  new Date("2023-01-23")
console.log(myCreatedDate3.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: 'long',
    timeZone: 'UTC'
})