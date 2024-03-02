// let date = new Date("2023-03-02");

// let date = new Date();
// console.log(date.getDate());
// console.log(date.getTime());
// console.log(date.getFullYear());

// ----------------------------------------------------------

// let num = Math.round(4.9);
// let num = Math.round(4.49);
// console.log(num);

// ----------------------------------------------------------

// let num = Math.random();
// let num = Math.random()*11;
// let num = Math.random().toFixed();
// console.log(num);

// ----------------------------------------------------------

// let customer = {
//     name: "Saman",
//     age: 22,
//     address: "Panadura"
// }

// console.log(customer);

// let jsonObj = JSON.stringify(customer);
// console.log(jsonObj); // JSON conversion

// console.log(JSON.parse(jsonObj)); // Javascript conversion

// let jsObj = JSON.parse(jsonObj);
// console.log(jsObj.name);

// ----------------------------------------------------------

// let fun = function() {
//     console.log("Hello World!");
// }
// console.log(fun());

// let fun = () => {
//     console.log("Hello World!");
// }
// console.log(fun());

// let fun = () => console.log("Hello World!");
// console.log(fun());

// let fun = (value) => console.log("Hello World!" + value);
// console.log(fun(" :)"));

// let fun = value => console.log("Hello World!" + value);
// console.log(fun(" :)"));

// let fun = value => {return "Hello World!" + value};
// console.log(fun(" :)"));

// ----------------------------------------------------------

// fetch("https://restcountries.com/v3.1/all")
// .then((response) => response.json())
// .then((data) => console.log(data))

// ----------------------------------------------------------

// let countryList = document.getElementById("countryList");

// fetch("https://restcountries.com/v3.1/all")
// .then((response) => response.json())
// .then((data) => {
//     data.forEach(element => {
//         let option = document.createElement("option");
//         option.text = element.flag+element.name.common;
//         countryList.appendChild(option);
//         console.log(element.name.common);
//     });
// })

// ----------------------------------------------------------

let countryList = document.getElementById("countryList");
let countryTable = document.getElementById("countryTable");

let body =
    `<tr>
        <td>Name</td>
        <td>Flag</td>
    </tr>`;

fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.then((data) => {
    data.forEach(element => {
        body +=
            `<tr>
                <td>${element.name.common}</td>
                <td>${element.flag}</td>
            </tr>`;

        let option = document.createElement("option");
        option.text = element.flag+element.name.common;
        countryList.appendChild(option);
        // console.log(element.name.common);
    });
    countryTable.innerHTML = body;
})

// ----------------------------------------------------------