/*This is a javascript program that accepts user input and prints to the web page*/

//Define the function that is activated when the submit button clicked.
function myFunction(){
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    message.innerHTML = userInput.value;        //Print the output to the webpage
    userInput.value = '';                       //Clear the input field after submission.
}