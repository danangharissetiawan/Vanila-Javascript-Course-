const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // get random number betwen 0 -3 
    const randomNumber = getRamdomNumber();
    // console.log(randomNumber);


    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRamdomNumber() {
    return Math.floor(Math.random() * colors.length);
};

// Math.floor() = pembulatan nilai ke atas (1.5 = 2)
// Math.random() = mengambil nilai random