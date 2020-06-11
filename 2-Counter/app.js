// set initial count
let count = 0;

// select value and button 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});

// Note
// forEach() = method untuk iterasi array sebanyak jumlah element array
// curretTarget = mengidentifikasi event untuk target saat ini, mengacu pada element yang terkait dengan even handler. (menyatukan beberapa handler yang sama kebeberapa element)

// classList = untuk mengakses daftar element kelas sebagai string.
// contains = mengembalikan nilai boolean yang menunjukan apakah suatu simpul merupakan turunan dari simpul yang diberilkan.