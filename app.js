let random = Math.random()*10;
let number = Math.round(random);

//let input = prompt("Enter a Number: ");

function getNumber() {
    const userInput = document.getElementById("input");
    let integerNum = Number(userInput);
    console.log(integerNum);

    let attempt = 3;

    while (attempt != 0) {
        attempt = attempt--;

        if (integerNum > number) {
            console.log(integerNum + " is grater than Generated Number..");
        } else if (integerNum < number) {
            console.log(integerNum + " is less than Generated Number..");
        } else if (integerNum == number) {
            console.log("Congratulations! You guessed the Number.");
        } 
    }

    console.log("Sorry, You Failed!");
}