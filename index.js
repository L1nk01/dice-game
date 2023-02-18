button = document.querySelectorAll(".drum");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        console.log("presionaste " + button[i].innerHTML);
    });
}