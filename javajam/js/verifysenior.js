var age;

age = prompt("Enter your age: ")
if (age >= 65) {
    output = "Free Friday Coffee Night for Seniors!"
    document.getElementById("verify").style.color = "#221811"
    document.getElementById("verify").style.fontWeight = "bold"
    document.getElementById("verify").style.fontStyle = "italic"
}
else {
    output = "Enjoy Music and Make Memories!"
    document.getElementById("verify").style.color = "#221811"
    document.getElementById("verify").style.fontWeight = "bold"
    document.getElementById("verify").style.fontStyle = "italic"
}

document.getElementById("verify").innerHTML = output;