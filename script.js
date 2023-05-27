let winningButton;

function generateButtons() {
    let numberOfButtons = document.getElementById("numberOfButtons").value;
    if (numberOfButtons < 1) {
        alert("Please enter a valid number of buttons (minimum 1).");
        return;
    }
    winningButton = Math.floor(Math.random() * numberOfButtons) + 1;
    let buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = ""; // Clear any existing buttons
    
    for (let i = 1; i <= numberOfButtons; i++) {
        let button = document.createElement("button");
        button.innerText = "Buton " + i;
        button.onclick = function() { checkWinner(i); };
        buttonsContainer.appendChild(button);
    }
}
function checkWinner(buttonNumber) {
    if (buttonNumber === winningButton) {
        alert("Congratulations! You're the winner!");
    } else {
        alert("Sorry, you're not the winner. Try again!");
    }
}
