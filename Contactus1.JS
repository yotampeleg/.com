const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const textDisplay = document.getElementById("textdisplay");
image1.addEventListener("click", function() {
    textDisplay.textContent = "מספר הטלפון שלי: 054-7622388";
});

image2.addEventListener("click", function() {
    textDisplay.textContent = "lironkoren@yahoo.com: המייל שלי";
});
