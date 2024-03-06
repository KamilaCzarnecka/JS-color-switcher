function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

let isColorChanging = true;

function changeBackgroundColor() {
    if (!isColorChanging) {
        return;
    }
    document.body.style.backgroundColor = getRandomHexColor();
    setTimeout(changeBackgroundColor, 1000);
};

document.querySelector("[data-start]").addEventListener("click", function() {
    this.disabled = true;
    document.querySelector("[data-stop]").disabled = false;
    isColorChanging = true;
    changeBackgroundColor();
});

document.querySelector("[data-stop]").addEventListener("click", function() {
    this.disabled = true;
    document.querySelector("[data-start]").disabled = false;
    isColorChanging = false
});